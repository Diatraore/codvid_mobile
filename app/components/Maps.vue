<template>
    <Page class="page" backgroundSpanUnderStatusBar="true" actionBarHidden="true">
        <ScrollView>
            <DockLayout>
                <MapView
                        width="100%"
                        height="100%"
                        :zoom="17"
                        :latitude="origin.latitude"
                        :longitude="origin.longitude"
                        @mapReady="onMapReady"

                />
            </DockLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import SelectedPageService from "../shared/selected-page-service";
    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Situation");
        },
        data() {
            return {
                origin: {
                    longitude: '',
                    latitude: '',
                },
                zoom: 14,
                tilt: '',
                bearing: '',
                mapView: null,
                isMounted: false,
            }
        },
        methods: {
            onMapReady(args) {
                this.mapView = args.object;
            }
        }
    }
</script>
