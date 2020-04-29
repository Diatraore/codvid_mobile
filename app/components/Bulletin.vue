<template>
    <Page backgroundSpanUnderStatusBar="true" actionBarHidden="true">
        <ScrollView>
            <StackLayout>
                <StackLayout height="250" backgroundColor="#2299dd" class="rounded-b">
                    <FlexboxLayout >
                        <Label text.decode="&#xf060;" class="nt-icon fas" fontSize="24" marginTop="40" marginLeft="10" color="white"  @tap="goToBack" />
                        <Label text="Bienvenue sur Codvid-Killer" color="white" textAlignment="left" fontSize="25" marginTop="40" marginLeft="10" />
                    </FlexboxLayout>
                    <label text="Tester son etat de santé" color="white" fontSize="16" marginLeft="10" />
                </StackLayout>

                <StackLayout class="one-dash">
                    <ScrollView class="p-10">
                        <StackLayout>
                            <CardView v-for="(item, index) in items" :key="index" radius="15" elevation="30">
                                <StackLayout class="p-10">
                                    <Image :src="item.img" stretch="aspectFill" horizontalAlignment="left" />
                                    <Label class="h2" :text="item.libelle" />
                                </StackLayout>
                            </CardView>
                        </StackLayout>
                    </ScrollView>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    export default {
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            goToBack() {
                this.$navigateBack();
            },
            onScroll() {
                utils.scrollView();
            }
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Bulletin");
        },
        data() {
            return {
                items: [
                    {libelle: "image 1", img: "~/assets/biblio/image-1.jpg"},
                    {libelle: "image 2", img: "~/assets/biblio/image-2.jpg"},
                    {libelle: "image 3", img: "~/assets/biblio/image-3.png"},
                    {libelle: "image 4", img: "~/assets/biblio/image-4.jpg"},
                    {libelle: "image 5", img: "~/assets/biblio/image-5.png"},

                ]
            }
        }
    }
</script>
<style lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';
</style>
