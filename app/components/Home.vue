<template>
    <Page class="page" backgroundSpanUnderStatusBar="true" actionBarHidden="true">
        <!--<ActionBar class="action-bar">

            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>

            <ActionItem icon="res://menu"
                android:visibility="collapsed"
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>-->

        <ScrollView ref="scrollView" @scroll="onScroll">
            <StackLayout>
                <StackLayout ref="topView" height="250" backgroundColor="#2299dd" class="rounded-b">
                    <Label text="Bienvenue sur Codvid-Killer" color="white" textAlignment="left" fontSize="25" marginTop="40" marginLeft="10" />
                    <label text="Tester son etat de santé" color="white" fontSize="16" marginLeft="10" />
                </StackLayout>

                <CardView class="one-dash mx-4" radius="20" elevation="40">
                    <StackLayout class="p-10">
                        <GridLayout  columns="115, 115" rows="115,115" width="100%" height="auto">
                            <StackLayout class="one-dash-item" orientation="vertical" width="100%" row="0" col="0" @tap="goToSituation">
                                <StackLayout class="mx-1">
                                    <Image horizontalAlignment="stretch" src="~/assets/images/test.jpg" stretch="aspectFit" width="40" height="40" />
                                    <label text="Situation sanitaire" textWrap="true" class="font-medium" />
                                </StackLayout>
                            </StackLayout>
                            <StackLayout class="one-dash-item" orientation="vertical" width="100%" row="0" col="1" @tap="goToQuestion">
                                <StackLayout class="mx-2">
                                    <Image horizontalAlignment="stretch" src="~/assets/images/test-2.jpg" stretch="aspectFit"  width="40" height="40"/>
                                    <Label text="tester son etat de santé" textWrap="true" class="font-medium" />
                                </StackLayout>
                            </StackLayout>
                            <StackLayout class="one-dash-item" orientation="vertical" width="100%" row="1" col="0" @tap="goToMesure">
                               <StackLayout class="mx-1">
                                   <Image horizontalAlignment="left" src="~/assets/images/prevention.jpg" stretch="aspectFit" width="40" height="40"/>
                                   <Label text="Mesure sanitaire" textWrap="true" class="font-medium" />
                               </StackLayout>
                            </StackLayout>
                            <StackLayout class="one-dash-item" orientation="vertical" width="100%" row="1" col="1" @tap="goToBulletin">
                                <StackLayout class="mx-2">
                                    <Image horizontalAlignment="left" src="~/assets/images/humour.jpg" width="40" height="40" stretch="aspectFit" />
                                    <Label text="Bulletin d'humour" textWrap="true" class=" font-medium" />
                                </StackLayout>
                            </StackLayout>
                        </GridLayout>
                    </StackLayout>
                </CardView>

            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import Situation from "./Situation";
    import Question from "./Question";
    import Bulletin from "./Bulletin";
    import Mesure from "./Mesure";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        computed: {
            message() {
                return "hello world";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            onScroll: function () {
                //access to the native event
                const scrollView = this.$refs.scrollView.nativeView;
                const topView = this.$refs.topView.nativeView;

                // if the offset is less than the height of the header.
                if (scrollView.verticalOffset < 250) {
                    const offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic
                    if (scrollView.ios) {
                        // iOS adjust the position with an animation to create a smother scrolling effect.
                        topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
                    } else {
                        // Android, animations are jerky so instead just adjust the position without animation.
                        topView.translateY = Math.floor(offset);
                    }
                }
            },
            goToSituation() {
                this.$navigateTo(Situation);
            },
            goToQuestion() {
                this.$navigateTo(Question);
            },
            goToMesure() {
                this.$navigateTo(Mesure);
            },
            goToBulletin() {
                this.$navigateTo(Bulletin);
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
