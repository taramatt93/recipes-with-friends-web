<template>
    <panel
        title="Favourites"
        class="favourites"
        panelColour="#08AC84">

        <v-data-table
            class="custom-data-table"
            :headers="headers"
            :items="favourites"
            height="inherit"
            hide-default-header
            hide-default-footer>

            <template v-slot:item="props">
                <tr @click="goToRoute">
                    <td
                        :id="props.item.RecipeId"
                        class="text-start">
                        {{props.item.title}}
                    </td>
                </tr>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
    data() {
        return {
            headers: [
                {
                    text: 'Meal',
                    value: 'title'
                }
            ],
            favourites: [],
        }
    },

    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user',
        ])
    },

    async mounted() {
        if (this.isUserLoggedIn) {
            this.favourites = (await BookmarkService.index({
                userId: this.user.id
            })).data
        }
    },

    methods: {
        goToRoute() {
            const recipeId = event.target.id
            this.$router.push({
                name:'viewRecipe',
                params: {
                    recipeId: recipeId
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
