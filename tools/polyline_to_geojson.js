var polyline = require('@mapbox/polyline');
var fs = require('fs');

// ogr2ogr to 
https://ogre.adc4gis.com/

var route = "cqyuFjeggNOKHUFUTmAHa@Lg@TDhAf@RJtD`BjCtA}AvFzFlDrCbBXR`BlABFHX@H?h@CTWx@sAzDm@lBMJgAbESr@ENsBrHiB|Gy@xCkArEUbAo@`DShAEx@@jAFl@FXv@fBnCdGf@nAr@tAv@jBf@tAnExKpBbFfEnKfF~K~KzV|AnDbBxDdB~DvBtEPZdAzAfAjAz@t@v@h@nAp@p@X`AZr@NnARhAJdA@hBIjKqAr@Ar@@z@F`ARn@RrAp@~ArA~@rA`@r@b@fAX|@Rz@\\lCFbA@xAElBO|Bw@nKsB|XWvFGbCCbDB|DHhBDt@PpC^xDX~BVrA^lB@@f@fCjAbE`BxE`ErKx^zaAzIxUvArDb@vAV~@`@hCJzA@jBGnB]pCyAdGQr@mGdVo@~B_B`Gu@xBsBvEg@x@g@`AiAfBc@t@KNyAtBoFlIoD~FuB`Ec@~@yBxEmAvCy@vBq@tBgBxFcAxD_A`EkA|FaAnGc@fDw@lH{@lIw@vIoClXYnC{@|IsCt]UbEItDE|TIdEOzB]hEi@~D{@tEu@vCkCfI{EzN}DrLyFjQmGlRqC|HeDbIoDvIqC|GqMr[oInSwMv[sOp_@uA~CkB`DgAxA}AfB}AvAo@h@eBnAaF|CsKtG{AfA_BbBs@hAm@lAm@zAY`AYnAShAUnBi@tGkA`Pa@dEo@dEaArEyI~\\wAbFeBjEeB`DoDjFyDlF_BxBmFfHsBhCgAdAmAdAiSnO}ErDs@l@iAjA}@jAo@~@m@fAq@tAu@pBu@nC]`BStAo@rG_AbKg@dD_@dBy@nCe@pAkBbE}HzP[v@m@dBi@lBa@jB_@tBOjASnBMxBGxBAbC@bBPfEx@xPfBz^f@~JTtDRxBVdBTpAl@jC`@rAhA|CpIdSz@`Cf@lBf@|BZrB^pDNtCFbEEbDMhCYxCe@zC_AzDaAxCsAzCq@nAy@pAoAbBqAtAwExE_NfNwNzNmDpDgCxCcAvAmB|Co@hAwCjGkNjZsAfCiAhBuAjB[H}@dAsAlAu@h@u@`@u@Zm@NuAV_@Gm@AoAIm@Mu@SgB}@q@i@m@m@{@iA}@oAwFwI"

// may need to flip
// returns an array of lat, lon pairs
var route_array =  polyline.decode(route);

// better to just have featurecollection and a stardard format. 
var geo_route = { "type": "FeatureCollection",
"features": [
  { "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": route_array
  },
  "properties": {}
}]
};

fs.writeFile("./data/route.json", JSON.stringify(geo_route), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

/////////////Explanation of Polyline methods/////////////////////
// returns a string-encoded polyline
// polyline.encode([[38.5, -120.2], [40.7, -120.95], [43.252, -126.453]]);

// returns a string-encoded polyline from a GeoJSON LineString
// polyline.fromGeoJSON({ "type": "Feature",
//   "geometry": {
//     "type": "LineString",
//     "coordinates": [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
//   },
//   "properties": {}
// });