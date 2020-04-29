<template>
    <Page class="page" backgroundSpanUnderStatusBar="true" actionBarHidden="true">
        <ScrollView >
            <StackLayout>

                <StackLayout height="250" backgroundColor="#2299dd" class="rounded-b">
                   <FlexboxLayout >
                       <Label text.decode="&#xf060;" class="nt-icon fas" fontSize="24" marginTop="40" marginLeft="10" color="white"  @tap="goToBack" />
                       <Label text="Situation sanitaire" color="white" textAlignment="left" fontSize="25" marginTop="40" marginLeft="10" />
                   </FlexboxLayout>

                    <label text="Tester son etat de santé" color="white" fontSize="16" marginLeft="10" />
                </StackLayout>

                <CardView class="one-dash mx-4" radius="20" elevation="40">
                    <StackLayout class="p-10" borderColor="white">
                        <SearchBar hint="Recherche" :text="search" class="p-10" />
                        <StackLayout class="p-10">

                            <Label text="Situation sanitaire dans le monde" fontSize="14" class="font-bold"/>
                            <Label :text="`${getNbCas} cas`" />
                            <Label :text="`${getDead} Morts`" />
                            <Label :text="`${getRecover} cas de guérison`" />
                        </StackLayout>
                    </StackLayout>
                </CardView>

                <StackLayout class="px-3">
                    <!--<CardView v-for="data in dataItems" :key="data.country_code" v-if="loading?'hidden':'visible'">
                        <StackLayout class="p-10">
                            <Label class="h2" :text="data.location" />
                            <Label class="h4" :text="data.confirmed" />
                            <Label class="h4" :text="data.dead" />
                            <Label class="h4" :text="data.recovered" />
                        </StackLayout>
                    </CardView>-->

                    <StackLayout class="py-1">
                        <MapView
                                width="100%"
                                height="85%"
                                dock="top"
                                :zoom="zoom"
                                :latitude="origin.latitude"
                                :longitude="origin.longitude"
                                :bearing="bearing" :tilt="tilt"
                                @mapReady="onMapReady"

                        />
                    </StackLayout>
                    <Label text="Aucune donné" :visibility="noData?'visible':'hidden'"  />
                    <ActivityIndicator :busy="loading" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
    import SelectedPageService from "../shared/selected-page-service";
    import axios from 'axios';
    import {isIOS, isAndroid} from 'tns-core-modules/platform';
    import * as geolocation from 'nativescript-geolocation';
    export default {
    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("Situation");
        this.getData();
        },
        methods: {
            goToBack() {
                this.$navigateBack();
            },
            getData() {
                let urlData = "https://www.trackcorona.live/api/countries";
                axios.get(urlData).then((response) => {
                    this.dataItems = response.data.data;
                    if (this.dataItems.length === 0) this.noData = true;
                    this.loading = false;
                });
            },
            getGeolocation() {
                geolocation.isEnabled().then((isEnabled) => {
                    if (!isEnabled) {
                        geolocation.enableLocationRequest(true, true)
                            .then(() => {
                            this.isMounted = true;
                            if (isAndroid && this.mapView) {
                                let uiSettings = this.mapView.gMap.getUiSettings();
                                uiSettings.setMyLocationButtonEnabled(true);
                                this.mapView.gMap.setMyLocationEnabled(true);
                            }
                            geolocation.getCurrentLocation({
                                timeout: 20000
                            }).then(location => {
                                if (!location) {
                                    console.log("Erreur de la geolocalisation");
                                } else {
                                    this.origin.latitude = location.latitude;
                                    this.origin.longitude = location.longitude;
                                    this.zoom = 14;
                                    this.bearing = 0;
                                }
                            });
                        }, (e) => {
                                console.log("erreur" + (e.message || e));
                            }).catch(ex => {
                                console.log("Ne peut obtenir la localisation", ex);
                        });
                    } else {
                        this.isMounted = true;
                        if (isAndroid && this.mapView) {
                            let uiSettings = this.mapView.gMap.getUiSettings();
                            uiSettings.setMyLocationButtonEnabled(true);
                            this.mapView.gMap.setMyLocationEnabled(true);
                        }
                        geolocation.getCurrentLocation({timeout: 20000}).then(location => {
                            if (!location) {
                                console.log("Erreur lors de la recherche de la localistion");
                            } else {
                                this.origin.latitude = location.latitude;
                                this.origin.longitude = location.longitude;;
                                this.zoom = 14;
                                this.bearing = 0;
                            }
                        })
                    }
                }, function (e) {
                    console.log("erreur" + (e.message || e));
                })
            },
            onMapReady(args) {
                this.mapView = args.object;
                /*var gMap = this.mapView.gMap;
                this.mapView.settings.myLocationEnabled = true;
                this.mapView.settings.myLocationButtonEnabled = true;
                this.mapView.settings.compassEnabled = true;
                this.mapView.settings.zoomGesturesEnabled = true;
                if (isAndroid && this.isMounted && geolocation.isEnabled()) {
                   let uiSettings = gMap.getUiSettings();
                   uiSettings.setMyLocationButtonEnabled(true);
                   gMap.setMyLocationEnabled(true);
                }
                if (isIOS) {
                    gMap.myLocationEnabled = true;
                    gMap.settings.myLocationButton = true;
                }*/
            }

        },
        data() {
            return {
                search: null,
                loading: true,
                noData: false,
                dataItems: [],
                origin: {
                    longitude: 0,
                    latitude: 0
                },
                zoom: 17,
                tilt: '',
                bearing: '',
                mapView: null,
                isMounted: false,
            }
        },
        computed: {
            getNbCas() {
                let sum = 0;
                this.dataItems.forEach(item => {
                    sum += item.confirmed;
                });
                return sum;
            },
            getDead() {
                let sum = 0;
                this.dataItems.forEach(e => {
                    sum += e.dead;
                });
                return sum;
            },
            getRecover() {
                let sum = 0;
                this.dataItems.forEach(e => {
                    sum += e.recovered;
                });
                return sum;
            }
        },

    }
</script>
<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';
</style>
