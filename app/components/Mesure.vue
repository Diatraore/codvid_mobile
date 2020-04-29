<template>
    <Page backgroundSpanUnderStatusBar="true" actionBarHidden="true">
        <ScrollView>
            <StackLayout>
                <StackLayout ref="topView" height="250" backgroundColor="#2299dd" class="rounded-b">
                    <FlexboxLayout >
                        <Label text.decode="&#xf060;" class="nt-icon fas" fontSize="24" marginTop="40" marginLeft="10" color="white"  @tap="goToBack" />
                        <Label text="Bienvenue sur Codvid-Killer" color="white" textAlignment="left" fontSize="25" marginTop="40" marginLeft="10" />
                    </FlexboxLayout>
                    <label text="Mesures sanitaires" color="white" fontSize="16" marginLeft="40" fontWeight="Bold" />
                </StackLayout>

                <CardView radius="20" elevation="40" class="one-dash mx-2">
                    <StackLayout class="p-10">
                        <Image src="~/assets/images/mesure-1.jpg" width="120" height="120" />
                        <StackLayout>
                            <Label text="RESTER CHEZ VOUS" horizontalAlignment="center"/>
                            <Label text="SAUVE DES VIES" horizontalAlignment="center"/>
                            <Label text="Contribuer à arreter le coronavirus" horizontalAlignment="center"/>
                        </StackLayout>
                    </StackLayout>
                </CardView>

                <CardView radius="20" elevation="40" class="my-1 mx-2">
                    <StackLayout class="p-10">
                        <StackLayout orientation="horizontal">
                            <Label text="1" marginRight="10" fontSize="18" color="red" />
                            <Label text="Rester chez vous autant que possible" fontSize="14" marginTop="4" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text="2" marginRight="10" fontSize="18" color="red" />
                            <Label text="Garder une distance de sécurité" fontSize="14" marginTop="4" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text="3" marginRight="10" fontSize="18" color="red" />
                            <Label text="Lavez-vous souvent les mains" fontSize="14" marginTop="4" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text="4" marginRight="10" fontSize="18" color="red" />
                            <Label text="Couvrez-vous la bouche quand vous toussez" fontSize="14" marginTop="4" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text="5" marginRight="10" fontSize="18" color="red" />
                            <Label text="Vous êtes malade ? Appellez votre medecin" fontSize="14" marginTop="4" />
                        </StackLayout>
                    </StackLayout>
                </CardView>


                <CardView radius="20" elevation="40" class="my-1 mx-2">
                    <StackLayout class="p-10 mx-2">
                        <TextView editable="false">
                            <FormattedString>
                                <Span text="Protégez-vous et protégez les autres en étant ‎informé des éléments essentiels " fontWeight="Bold" />
                                <Span text="et en prenant les ‎précautions adaptées. " fontWeight="Bold" />
                                <Span text="Suivez les conseils de ‎l’organisme de santé publique du lieu où vous vivez " fontWeight="Bold" />
                            </FormattedString>
                        </TextView>
                        <Label text="Prévenir la propagation de la COVID-19 :" marginBottom="5" />
                        <StackLayout orientation="horizontal">
                            <Label text.decode="&#xf192;" class="nt-icon fas" marginTop="5"/>
                            <Label textWrap="true" text="Se laver souvent les mains. Utiliser du savon et ‎de l’eau, ou une solution hydroalcoolique." marginLeft="10" marginBottom="5" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text.decode="&#xf192;" class="nt-icon fas" marginTop="5"/>
                            <Label textWrap="true" text="Rester à distance de toute personne qui tousse ‎ou éternue." marginLeft="10" marginBottom="5" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text.decode="&#xf192;" class="nt-icon fas" marginTop="5"/>
                            <Label textWrap="true" text="Ne pas toucher ses yeux, son nez ou sa bouche." marginLeft="10" marginBottom="5" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text.decode="&#xf192;" class="nt-icon fas" marginTop="5"/>
                            <Label textWrap="true" text="En cas de toux ou d’éternuement, couvrez-vous ‎la bouche et le nez avec le pli du coude ou avec un ‎mouchoir." marginLeft="10" marginBottom="5" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text.decode="&#xf192;" class="nt-icon fas" marginTop="3"/>
                            <Label textWrap="true" text="Restez chez vous si vous ne vous sentez pas ‎bien." marginLeft="10" marginBottom="5" />
                        </StackLayout>
                        <StackLayout orientation="horizontal">
                            <Label text.decode="&#xf192;" class="nt-icon fas" marginTop="5"/>
                            <Label textWrap="true" text="Consultez un médecin si vous avez de la fièvre, ‎que vous toussez et que vous avez des difficultés à ‎respirer. Prévenez le service concerné par ‎téléphone au préalable." marginLeft="10" marginBottom="5" />
                        </StackLayout>

                        <StackLayout orientation="horizontal">
                            <Label text.decode="&#xf192;" class="nt-icon fas" marginTop="5"/>
                            <Label textWrap="true" text="Respectez les indications des autorités sanitaires ‎locales." marginLeft="10" marginBottom="5" />
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
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            goToBack() {
                this.$navigateBack();
            },

        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Bulletin");
        },
    }
</script>
<style lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';
</style>
