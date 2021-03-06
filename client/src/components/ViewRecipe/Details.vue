<template>
    <v-row>
        <v-col
            cols="12"
            class="custom-padding pt-7">

            <panel
                :title="recipe.title"
                panelColour="#099E7A"
                class="title-box">

                <v-row class="grey-background">
                    <v-col
                        align-self="center"
                        class="px-12 py-12"
                        cols="5">
                        <div class="photo-box">
                            <p class="photo-text">
                                <img

                                    v-if="recipe && recipe.mainPhoto && !isLoading"
                                    v-bind:src="require(`@/../uploads/${recipe.mainPhoto}`)"
                                    height="300"
                                    width="300"/>

                                <img
                                    v-else-if="!isLoading"
                                    src="../../assets/stockFood.jpg"
                                    height="300"
                                    width="300"
                                    />
                            </p>

                        </div>
                    </v-col>

                    <v-col
                        cols="7"
                        class="px-12 py-12">
                        <div class="info-box">
                            <v-btn
                                v-if="isUserLoggedIn && !bookmark && !isLoading"
                                @click="setAsBookmark">
                                I love this
                            </v-btn>

                            <v-btn
                                v-else-if="isUserLoggedIn && !isLoading"
                                @click="unsetAsBookmark">
                                Not one of my favourites anymore
                            </v-btn>


                            <div class="details">
                                <v-row>
                                    <v-col
                                        cols="6"
                                        class="pb-0">
                                        <p class="bold-text">Prep: 20 mins</p>
                                        <p class="bold-text">Cook: 30 mins</p>
                                    </v-col>

                                    <v-col
                                        cols="6"
                                        class="pb-0">
                                        <p class="bold-text">Cuisine: Japanese</p>
                                        <p class="bold-text">Mood: Sexy</p>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </panel>
        </v-col>
    </v-row>

</template>

<script>
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
    data() {
        return {
            bookmark: null,
            isLoading: true //Prevents small bug with button text changing whilst bookmarks are still being retrieved
        }
    },
    props: [
        'recipe'
    ],

    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },


    // use a watch instead of mounted, as this.recipe has not yet been defined when mounted
    watch: {
        async recipe() {

            // Only attempt to check whether the recipe has been bookmarked if there is a user logged in
            if (!this.isUserLoggedIn) {
                return
            }

            // Someone is logged in
            else {
                try {
                    const bookmarks = (await BookmarkService.index({
                        recipeId: this.recipe.id,
                        userId: this.user.id
                    })).data
                    this.isLoading = false;
                    if (bookmarks.length) {
                        this.bookmark = bookmarks[0]
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        }
    },

    methods: {
        async setAsBookmark() {
            try {
                this.bookmark = (await BookmarkService.post({
                    recipeId: this.recipe.id,
                    userId: this.$store.state.user.id
                })).data
            } catch(err) {
                console.log(err)
            }
        },

        async unsetAsBookmark() {
            try {
                await BookmarkService.delete(this.bookmark.id)
                this.bookmark = null
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.custom-padding {
    padding-left: 39px;
    padding-right: 39px;
}

.photo-box {
    /* border: 1px solid black; */
    height: 259px;
    position: relative;
}

.photo-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
}

.info-box {
    /* border: 1px solid black; */
    height: 259px;
    position: relative;
}

.details {
    /* border: 1px solid black; */
    margin-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
}

p.no-margin {
    margin-bottom: 0;
}

.bold-text {
    font-weight: bold;
}

.grey-background {
    background-color: #F8F4F2;
}
</style>
