<template>
    <div>
        <page-header />

        <v-container fill-height fluid>
            <v-row>
                <v-col
                    cols="12"
                    class="custom-padding pt-7">

                    <panel
                        title="View Recipe"
                        panelColour="#099E7A"
                        class="title-box">

                        <v-row>
                            <v-col
                                align-self="center"
                                class="px-12 py-12"
                                cols="5">
                                <div class="photo-box">
                                    <p class="photo-text">Photo here</p>
                                </div>
                            </v-col>

                            <v-col
                                cols="7"
                                class="px-12 py-12">
                                <div class="info-box">
                                    <h2>Chicken ramen</h2>
                                    <div class="details">
                                        <v-row>
                                            <v-col
                                                cols="6"
                                                class="pb-0">
                                                <p class="bold-text">Prep:</p>
                                                <p class="bold-text">Cook:</p>
                                            </v-col>

                                            <v-col
                                                cols="6"
                                                align-self="center">
                                                <p class="no-margin bold-text">Eaten:</p>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </panel>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="6"
                    class="custom-padding pt-7"
                    align-self="center">
                    <panel
                        title="Story"
                        panelColour="#099E7A"
                        class="story-panel">
                        <v-row>
                            <v-col
                                cols="12"
                                class="px-12 py-12">

                                <div>
                                    <p>It was great.</p>
                                </div>
                            </v-col>
                        </v-row>
                    </panel>
                </v-col>
                <v-col
                    cols="6"
                    class="custom-padding pt-7"
                    align-self="center">
                    <panel
                        title="Hot Tips"
                        panelColour="#099E7A"
                        class="tips-panel">
                        <v-row>
                            <v-col
                                cols="12"
                                class="px-12 py-12">
                                <div>
                                    <p>Don't burn the onions!</p>
                                </div>
                            </v-col>
                        </v-row>
                    </panel>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="4"
                    class="custom-padding pt-7">
                    <panel
                        title="Ingredients"
                        panelColour="#08AC84">
                        <v-row>
                            <v-col
                                cols="12"
                                class="px-12 py-12">
                                <div class="inner-container">
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                    <p>Test</p>
                                </div>
                            </v-col>
                        </v-row>
                    </panel>
                </v-col>
                <v-col
                    cols="8"
                    class="custom-padding pt-7"
                    align-self="center">
                    <panel
                        title="Method"
                        panelColour="#036F55"
                        class="method-panel">
                        <v-row>
                            <v-col
                                cols="6"
                                class="custom-padding px-12 py-12">
                                <p>Step 1</p>
                            </v-col>
                            <v-col
                                cols="6"
                                class="custom-padding px-12 py-12">
                                <div class="photo-box">
                                    <p class="photo-text">Photo here</p>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col
                                cols="6"
                                class="custom-padding px-12 py-12">
                                <p>Step 1</p>
                            </v-col>
                            <v-col
                                cols="6"
                                class="custom-padding px-12 py-12">
                                <div class="photo-box">
                                    <p class="photo-text">Photo here</p>
                                </div>
                            </v-col>
                        </v-row>
                    </panel>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>
import PageHeader from '@/components/Header'

export default {
    components: {
        PageHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .custom-padding {
        padding-left: 39px;
        padding-right: 39px;
    }

    .panel-title {
        text-align: center;
        width: 100%;
        color: white;
        font-family: "Segoe UI";
        font-size: 24px;
    }

    .photo-box {
        border: 1px solid black;
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

    .card-title {
        justify-content: center;
    }

    .inner-container {
        min-height: 300px;
        max-height: 533px;
        overflow: auto;
    }

    .method-panel {
        min-height: 426px;
        max-height: 426px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .story-panel, .tips-panel {
        min-height: 297px;
        overflow-y: auto;
        overflow-x: hidden;
    }

</style>
