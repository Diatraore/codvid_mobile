<template>
    <Page backgroundSpanUnderStatusBar="true" actionBarHidden="true">
        <ScrollView ref="scrollView" @scroll="onScroll">
            <StackLayout>
                <StackLayout ref="topView" height="250" backgroundColor="#2299dd" class="rounded-b">
                    <FlexboxLayout>
                        <Label text.decode="&#xf060;" class="nt-icon fas" fontSize="24" marginTop="40" marginLeft="10" color="white" @tap="goToBack" />
                        <Label text="Santé" class="font-bold" color="white" textAlignment="left" fontSize="25" marginTop="40" marginLeft="10" />
                    </FlexboxLayout>
                    <label text="Tester son etat de santé" color="white" fontSize="16" marginLeft="10" />
                </StackLayout>

                <CardView radius="20" elevation="40" class="mx-4 one-dash">
                    <StackLayout class="p-10">
                        <StackLayout>
                            <Label text="Avez-vous le corps chaud ?" class="font-bold" fontSize="14" />
                        </StackLayout>
                        <StackLayout>
                            <Label text="Est vous enruhmé ?" class="font-bold" fontSize="14" />
                        </StackLayout>
                        <StackLayout>
                            <Label text="Avez vous des difficultés a respirer ?" class="font-bold" fontSize="14" />
                        </StackLayout>
                        <StackLayout>
                            <Label text="Toussez vous ?" fontSize="14" class="font-bold" />
                        </StackLayout>
                    </StackLayout>
                </CardView>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Question");
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            goToBack() {
                this.$navigateBack();
            },
            onScroll() {
                utils.scrollView();
            },
        }
    }
</script>
<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
