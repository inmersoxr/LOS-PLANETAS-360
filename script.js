(function(){
    var script = {
 "definitions": [{
 "id": "effect_F08A413F_E75B_C790_41EB_645B19A695BF",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4589312_E557_4B90_41D5_B8CFA05EEAE0",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08AC13F_E75B_C790_41EC_BDE5AFC49812",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F095D120_E75B_C7B0_41CE_FE7038924202",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F084713F_E75B_C790_41E1_ADCBA5AADB67",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08E513F_E75B_C790_41B6_A500FCBA20CC",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F086114F_E75B_C7F0_41E7_280BEA81E577",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4423312_E557_4B90_41C9_07E36608B266",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 72.91,
  "class": "PanoramaCameraPosition",
  "pitch": -6.53
 },
 "id": "panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_F45B1312_E557_4B90_41D7_23EDD913A68F",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F087614F_E75B_C7F0_41BC_4A20CFB9427A",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F45B5312_E557_4B90_41E5_7E80C1B8450B",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4451312_E557_4B90_41BB_D1E30B75B982",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "SATURNO",
 "id": "panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40",
 "thumbnailUrl": "media/panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_t.jpg",
 "hfovMin": "120%",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "id": "effect_F458B312_E557_4B90_41C1_8A3ED755B6F7",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F09B2120_E75B_C7B0_41D4_380B0A35CB9B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F09BC120_E75B_C7B0_41BB_57BD9B5E019D",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F093B130_E75B_C790_41CE_BCE0A646CF9A",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08DE13F_E75B_C790_41D1_1C59A97F8C28",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0918130_E75B_C790_41B3_67371B7397F1",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4426312_E557_4B90_41D5_7FEAECC3B01E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08F813F_E75B_C790_41DC_B64CCADC0A79",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4425321_E557_4BB0_41C8_9DBEE82A8D6D",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4598312_E557_4B90_4189_4E5B3C8826EC",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F088013F_E75B_C790_41CE_3E37287BB7DD",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": -54.38,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": -2.87,
   "targetStereographicFactor": 0,
   "targetHfov": 133,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -54.38,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -2.87
 },
 "automaticRotationSpeed": 48,
 "id": "panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 3563,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 53.61,
  "class": "PanoramaCameraPosition",
  "pitch": 6.86
 },
 "id": "panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_F08A013F_E75B_C790_41DE_063AEE57691A",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.8,
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "pitch": -12.99
 },
 "id": "panorama_EC0E1727_E113_8698_41DC_8675C624F065_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_F4453312_E557_4B90_41E1_232500A45164",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08E213F_E75B_C790_41DC_0D32654E7620",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F094B120_E75B_C7B0_41CF_EA999353024E",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08AA13F_E75B_C790_41E5_358351CEE20E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08CF130_E75B_C790_41C8_CCEC740A5DFE",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08CA130_E75B_C790_41B8_F10A9D28E145",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0936130_E75B_C790_41BB_CB51BB27A471",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -62.61,
  "class": "PanoramaCameraPosition",
  "pitch": 17.41
 },
 "id": "panorama_ED20170F_E113_86A7_41E8_5A6983248909_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_F088913F_E75B_C790_41DC_39FDA924A0B3",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4464312_E557_4B90_41CD_B3F91755EBC0",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08D813F_E75B_C790_41A3_EECCF7BFEA80",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08BD13F_E75B_C790_41A9_BE76983C74A9",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F084613F_E75B_C790_4194_BCAFD1222FA5",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "URANO",
 "id": "panorama_ED295C82_E113_8B98_417B_259349441C82",
 "thumbnailUrl": "media/panorama_ED295C82_E113_8B98_417B_259349441C82_t.jpg",
 "hfovMin": "120%",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "id": "effect_F084F13F_E75B_C790_41E0_7A2039904ACB",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F096D120_E75B_C7B0_41DE_106B41B67148",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F45A8312_E557_4B90_41D3_3F0CEDD16ED8",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F09AA120_E75B_C7B0_41DA_05B669CAE678",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4435321_E557_4BB0_41D0_CFFAFFD366B0",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4594312_E557_4B90_41CB_75C587B1E1AD",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0904130_E75B_C790_419A_26A0A602D9FE",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F442E321_E557_4BB0_41E8_65D132CE354B",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F092A130_E75B_C790_41E0_54E72A34B4A7",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08DD13F_E75B_C790_41D8_78844D237D01",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F45DA312_E557_4B90_41B8_0006FF863D21",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F089A13F_E75B_C790_41E4_4E47218CCE4D",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08A613F_E75B_C790_41D1_878FBFBF830E",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F086E14F_E75B_C7F0_41E2_A5D94D30F89C",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08C6130_E75B_C790_41D9_182326521A25",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F084913F_E75B_C790_41DD_146362975D5C",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F085A14F_E75B_C7F0_41E7_1216DAEFC38B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -116.71,
  "class": "PanoramaCameraPosition",
  "pitch": -3.96
 },
 "id": "panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_F08A213F_E75B_C790_41E3_20A8A3BF9A34",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4D3E64A_E4EB_4DF0_41D8_CE36C56BF97F",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.12,
  "class": "PanoramaCameraPosition",
  "pitch": 14.26
 },
 "id": "panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "vfov": 180,
 "label": "INTRO",
 "id": "panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886",
 "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4_t.jpg",
 "hfovMin": "100%",
 "class": "LivePanorama",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_2/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_3/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_4/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_5/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_6/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_7/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "frameTransitionTime": 1000,
 "hfovMax": 142
},
{
 "id": "effect_F092F130_E75B_C790_41D3_76B9A807CA43",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F096C130_E75B_C790_41E4_7E22E9CE4884",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F445D312_E557_4B90_41D9_94009C5D6B50",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "JUPITER",
 "id": "panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1",
 "thumbnailUrl": "media/panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_t.jpg",
 "hfovMin": "120%",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "id": "effect_F08F213F_E75B_C790_41E8_AE92EB6FD6F2",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4593312_E557_4B90_41DB_FE23B2777F9F",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F090F130_E75B_C790_41E8_22B8FE7F10E2",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08BF13F_E75B_C790_41D9_169415EFEDA9",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4475312_E557_4B90_41DB_624431405AE4",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0923130_E75B_C790_41DD_11067810C770",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0912130_E75B_C790_41E8_D3629B342AAD",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F446F312_E557_4B90_41E6_1CCC3E871212",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08FA13F_E75B_C790_41E6_1DB859F5FBE8",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4449312_E557_4B90_41E1_18B235A09C0A",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0901130_E75B_C790_41DD_07023F02788C",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0952120_E75B_C7B0_41E4_2F83482ED932",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0961120_E75B_C7B0_41D7_C1FEE28432EF",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08EC13F_E75B_C790_41DD_191A07B4291E",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F447B312_E557_4B90_41DD_219864E8A35E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F094E120_E75B_C7B0_41B6_26DAEB934290",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.6,
  "class": "PanoramaCameraPosition",
  "pitch": 2.46
 },
 "id": "panorama_ED295C82_E113_8B98_417B_259349441C82_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "effect_F0922130_E75B_C790_41E3_C1DB6E423D01",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08B713F_E75B_C790_41E3_BB4A5C4387F1",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08FD13F_E75B_C790_41A3_0B0905B21BA9",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F089513F_E75B_C790_41E1_54B215DED0F9",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F458C312_E557_4B90_41D9_4283497D67CD",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F45BD312_E557_4B90_41D3_EC378C0F8DB1",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F091D130_E75B_C790_41EC_D39741C4E438",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4585312_E557_4B90_41B3_47BE9709425B",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4D34649_E4EB_4DF0_41E8_487C30F435AB",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "items": [
  {
   "media": "this.panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F4D28648_E4EB_4DF0_41B7_A455B937114B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F09AA120_E75B_C7B0_41DA_05B669CAE678, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F09B7120_E75B_C7B0_41EA_1D9FC9837A62, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F45DA312_E557_4B90_41B8_0006FF863D21, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F09B3120_E75B_C7B0_41C4_E5D522F1DBC8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45DE312_E557_4B90_41BF_7DCD6C99B054, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F09B2120_E75B_C7B0_41D4_380B0A35CB9B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F45A5312_E557_4B90_41B9_A7565CB2C33E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F09BF120_E75B_C7B0_41EB_F62ED8DFDBB7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F45A8312_E557_4B90_41D3_3F0CEDD16ED8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F09BC120_E75B_C7B0_41BB_57BD9B5E019D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F45AA312_E557_4B90_41E6_BDF9936B2A9C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F09B8120_E75B_C7B0_41A3_33BDB5D56E47, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F45B1312_E557_4B90_41D7_23EDD913A68F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F0945120_E75B_C7B0_41CC_A56F8CD9B740, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F45B5312_E557_4B90_41E5_7E80C1B8450B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F4D28648_E4EB_4DF0_41B7_A455B937114B, 'showEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F45DA312_E557_4B90_41B8_0006FF863D21, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45DE312_E557_4B90_41BF_7DCD6C99B054, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F45A5312_E557_4B90_41B9_A7565CB2C33E, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F45A8312_E557_4B90_41D3_3F0CEDD16ED8, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F45AA312_E557_4B90_41E6_BDF9936B2A9C, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F45B1312_E557_4B90_41D7_23EDD913A68F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F45B5312_E557_4B90_41E5_7E80C1B8450B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_camera",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_EC0E1727_E113_8698_41DC_8675C624F065",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F0941120_E75B_C7B0_41D9_E7A5EE0F7E71, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_417F_246333C3D69F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F45BD312_E557_4B90_41D3_EC378C0F8DB1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F094E120_E75B_C7B0_41B6_26DAEB934290, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F094B120_E75B_C7B0_41CF_EA999353024E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45BE312_E557_4B90_41D7_32AC5DD70064, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F0948120_E75B_C7B0_41B4_B94A8F677702, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4585312_E557_4B90_41B3_47BE9709425B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F0955120_E75B_C7B0_41EA_9454B8A00594, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4589312_E557_4B90_41D5_B8CFA05EEAE0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F0952120_E75B_C7B0_41E4_2F83482ED932, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F458A312_E557_4B90_41E6_F0FD1CE22F2D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F0950120_E75B_C7B0_41E4_36EDE8EF468E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F458E312_E557_4B90_41D1_1542701C43F2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F095D120_E75B_C7B0_41CE_FE7038924202, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4597312_E557_4B90_41EA_CACB80574F69, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_417F_246333C3D69F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F45BD312_E557_4B90_41D3_EC378C0F8DB1, 'showEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45BE312_E557_4B90_41D7_32AC5DD70064, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4585312_E557_4B90_41B3_47BE9709425B, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4589312_E557_4B90_41D5_B8CFA05EEAE0, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F458A312_E557_4B90_41E6_F0FD1CE22F2D, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F458E312_E557_4B90_41D1_1542701C43F2, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4597312_E557_4B90_41EA_CACB80574F69, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EC0E1727_E113_8698_41DC_8675C624F065_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F0967120_E75B_C7B0_41D3_B1929986BF94, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D34649_E4EB_4DF0_41E8_487C30F435AB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F0962120_E75B_C7B0_41B2_C22404D1FBDE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F458B312_E557_4B90_41C1_8A3ED755B6F7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F458C312_E557_4B90_41D9_4283497D67CD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F0961120_E75B_C7B0_41D7_C1FEE28432EF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F096D120_E75B_C7B0_41DE_106B41B67148, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4593312_E557_4B90_41DB_FE23B2777F9F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F096B120_E75B_C7B0_41E2_BD1321EF20EA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4594312_E557_4B90_41CB_75C587B1E1AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F0968120_E75B_C7B0_41E6_B362E51433C6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4598312_E557_4B90_4189_4E5B3C8826EC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F0974120_E75B_C7B0_41DE_E3FC3385FAA8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F459F312_E557_4B90_41DB_5862C721132A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F0973120_E75B_C7B0_41D4_240BC72DB021, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4462312_E557_4B90_41E0_AF2DB2EAE41A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D34649_E4EB_4DF0_41E8_487C30F435AB, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F458B312_E557_4B90_41C1_8A3ED755B6F7, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F458C312_E557_4B90_41D9_4283497D67CD, 'showEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4593312_E557_4B90_41DB_FE23B2777F9F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4594312_E557_4B90_41CB_75C587B1E1AD, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4598312_E557_4B90_4189_4E5B3C8826EC, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F459F312_E557_4B90_41DB_5862C721132A, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4462312_E557_4B90_41E0_AF2DB2EAE41A, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED20D418_E113_BAA9_41E3_643C96320E0E",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F097B120_E75B_C7B0_41E3_CE6F21E5E94F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_41C1_FBBAAB48C111, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F0979120_E75B_C7B0_41E1_FA33335CBE22, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F446C312_E557_4B90_41D9_41D147ACD956, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F096E120_E75B_C7B0_41D5_BE1DABDE3372, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4471312_E557_4B90_41E7_71303F9C402A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F4475312_E557_4B90_41DB_624431405AE4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F096C130_E75B_C790_41E4_7E22E9CE4884, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F0969130_E75B_C790_41D4_B153233B951C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F447B312_E557_4B90_41DD_219864E8A35E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F0977130_E75B_C790_41A1_1A95F4A51799, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4464312_E557_4B90_41CD_B3F91755EBC0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F0972130_E75B_C790_41AF_2939CC095DDA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4468312_E557_4B90_41DA_C927ED534DF8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F097F130_E75B_C790_41DC_913A979F9CE9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F446F312_E557_4B90_41E6_1CCC3E871212, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_41C1_FBBAAB48C111, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F446C312_E557_4B90_41D9_41D147ACD956, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4471312_E557_4B90_41E7_71303F9C402A, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F4475312_E557_4B90_41DB_624431405AE4, 'showEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F447B312_E557_4B90_41DD_219864E8A35E, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4464312_E557_4B90_41CD_B3F91755EBC0, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4468312_E557_4B90_41DA_C927ED534DF8, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F446F312_E557_4B90_41E6_1CCC3E871212, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F097A130_E75B_C790_41E1_62C223B7319B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3664A_E4EB_4DF0_41E4_E7C416968DFF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F0978130_E75B_C790_41EC_52943B595577, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4479312_E557_4B90_41C3_8C57C9099EA6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F0904130_E75B_C790_419A_26A0A602D9FE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F447D312_E557_4B90_41C6_A6D1213FC176, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F0901130_E75B_C790_41DD_07023F02788C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4440312_E557_4B90_41EA_B85BC89767AC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F4445312_E557_4B90_41E6_275C70805181, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F090F130_E75B_C790_41E8_22B8FE7F10E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F090B130_E75B_C790_41E2_534166B84D1B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4446312_E557_4B90_41C5_1F2C501C83F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F0909130_E75B_C790_41DE_B944E7023ACB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F444C312_E557_4B90_41E3_715A526457C8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F0916130_E75B_C790_41CF_5A94D593CE9C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4453312_E557_4B90_41E1_232500A45164, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3664A_E4EB_4DF0_41E4_E7C416968DFF, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4479312_E557_4B90_41C3_8C57C9099EA6, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F447D312_E557_4B90_41C6_A6D1213FC176, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4440312_E557_4B90_41EA_B85BC89767AC, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F4445312_E557_4B90_41E6_275C70805181, 'showEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4446312_E557_4B90_41C5_1F2C501C83F9, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F444C312_E557_4B90_41E3_715A526457C8, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4453312_E557_4B90_41E1_232500A45164, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F0912130_E75B_C790_41E8_D3629B342AAD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3A64A_E4EB_4DF0_41DB_4FB61F3809F6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F091D130_E75B_C790_41EC_D39741C4E438, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F445D312_E557_4B90_41D9_94009C5D6B50, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F091B130_E75B_C790_41D3_452A1F0354C6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4449312_E557_4B90_41E1_18B235A09C0A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F0918130_E75B_C790_41B3_67371B7397F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F444D312_E557_4B90_41C2_A44D27E103E4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F0924130_E75B_C790_41E1_615EFCE7506B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4451312_E557_4B90_41BB_D1E30B75B982, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F4455312_E557_4B90_41B9_60E5F2015EDD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F0923130_E75B_C790_41DD_11067810C770, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F092F130_E75B_C790_41D3_76B9A807CA43, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4459312_E557_4B90_41E5_5E3CB8793C74, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F092B130_E75B_C790_41E9_915A4275607D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F445C312_E557_4B90_41DF_8AB9B3695731, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3A64A_E4EB_4DF0_41DB_4FB61F3809F6, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F445D312_E557_4B90_41D9_94009C5D6B50, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4449312_E557_4B90_41E1_18B235A09C0A, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F444D312_E557_4B90_41C2_A44D27E103E4, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4451312_E557_4B90_41BB_D1E30B75B982, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F4455312_E557_4B90_41B9_60E5F2015EDD, 'showEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4459312_E557_4B90_41E5_5E3CB8793C74, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F445C312_E557_4B90_41DF_8AB9B3695731, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED295C82_E113_8B98_417B_259349441C82",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F0936130_E75B_C790_41BB_CB51BB27A471, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4423312_E557_4B90_41C9_07E36608B266, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F0934130_E75B_C790_41B3_3015B01E32F2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4426312_E557_4B90_41D5_7FEAECC3B01E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F0931130_E75B_C790_41EB_F10CA490AA4A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F442A312_E557_4B90_41D3_967FC8C89196, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F093E130_E75B_C790_41E4_AF76431AC2C0, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F442E321_E557_4BB0_41E8_65D132CE354B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F093B130_E75B_C790_41E4_5D4664A74A64, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4435321_E557_4BB0_41D0_CFFAFFD366B0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F0922130_E75B_C790_41E3_C1DB6E423D01, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4438321_E557_4BB0_4146_550BE8D8E734, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F4425321_E557_4BB0_41C8_9DBEE82A8D6D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F092E130_E75B_C790_41D6_C7E1351D8DA1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F092A130_E75B_C790_41E0_54E72A34B4A7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F442B321_E557_4BB0_41E0_F6EBD0D77668, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4423312_E557_4B90_41C9_07E36608B266, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4426312_E557_4B90_41D5_7FEAECC3B01E, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F442A312_E557_4B90_41D3_967FC8C89196, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F442E321_E557_4BB0_41E8_65D132CE354B, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4435321_E557_4BB0_41D0_CFFAFFD366B0, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4438321_E557_4BB0_4146_550BE8D8E734, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F4425321_E557_4BB0_41C8_9DBEE82A8D6D, 'showEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F442B321_E557_4BB0_41E0_F6EBD0D77668, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED295C82_E113_8B98_417B_259349441C82_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED20170F_E113_86A7_41E8_5A6983248909",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)",
   "camera": "this.panorama_ED20170F_E113_86A7_41E8_5A6983248909_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 7, 0); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3E64A_E4EB_4DF0_41D8_CE36C56BF97F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4437321_E557_4BB0_4195_0BFB523F1CFD, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4438321_E557_4BB0_41E4_A2B81810E7DA, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F443D321_E557_4BB0_41E4_13582ACEAA42, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4400321_E557_4BB0_41C0_9A2C01390B3C, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4402321_E557_4BB0_41EB_14227F330536, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4409321_E557_4BB0_41D7_7A2C36C96509, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F440F321_E557_4BB0_41E6_1A580CFEBA3B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F0936130_E75B_C790_41E9_025D17BD4033, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3E64A_E4EB_4DF0_41D8_CE36C56BF97F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F0933130_E75B_C790_41D6_9A5696EF264C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4437321_E557_4BB0_4195_0BFB523F1CFD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F0930130_E75B_C790_41CE_2A256C8B6BA5, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4438321_E557_4BB0_41E4_A2B81810E7DA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F093B130_E75B_C790_41CE_BCE0A646CF9A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F443D321_E557_4BB0_41E4_13582ACEAA42, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F0938130_E75B_C790_41D8_13ABD9C5FB74, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4400321_E557_4BB0_41C0_9A2C01390B3C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F08C6130_E75B_C790_41D9_182326521A25, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4402321_E557_4BB0_41EB_14227F330536, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F08C2130_E75B_C790_41C5_26CE5B910823, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4409321_E557_4BB0_41D7_7A2C36C96509, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F440F321_E557_4BB0_41E6_1A580CFEBA3B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F08CF130_E75B_C790_41C8_CCEC740A5DFE, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543'); this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "id": "effect_F0977130_E75B_C790_41A1_1A95F4A51799",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4462312_E557_4B90_41E0_AF2DB2EAE41A",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F45BE312_E557_4B90_41D7_32AC5DD70064",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4597312_E557_4B90_41EA_CACB80574F69",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4468312_E557_4B90_41DA_C927ED534DF8",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "id": "effect_F4D3A64A_E4EB_4DF0_41DB_4FB61F3809F6",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0972130_E75B_C790_41AF_2939CC095DDA",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4D28648_E4EB_4DF0_41B7_A455B937114B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F45AA312_E557_4B90_41E6_BDF9936B2A9C",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F444C312_E557_4B90_41E3_715A526457C8",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0933130_E75B_C790_41D6_9A5696EF264C",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08DC13F_E75B_C790_41E8_070D72C833BB",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F09BF120_E75B_C7B0_41EB_F62ED8DFDBB7",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4D3664A_E4EB_4DF0_41E4_E7C416968DFF",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0934130_E75B_C790_41B3_3015B01E32F2",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0945120_E75B_C7B0_41CC_A56F8CD9B740",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0948120_E75B_C7B0_41B4_B94A8F677702",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0967120_E75B_C7B0_41D3_B1929986BF94",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F097A130_E75B_C790_41E1_62C223B7319B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569",
 "thumbnailUrl": "media/panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_t.jpg",
 "label": "VENUS",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "id": "effect_F4445312_E557_4B90_41E6_275C70805181",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0968120_E75B_C7B0_41E6_B362E51433C6",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0973120_E75B_C7B0_41D4_240BC72DB021",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F086914F_E75B_C7F0_41D6_BF7BA97EE92E",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0962120_E75B_C7B0_41B2_C22404D1FBDE",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F097F130_E75B_C790_41DC_913A979F9CE9",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F446C312_E557_4B90_41D9_41D147ACD956",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F092E130_E75B_C790_41D6_C7E1351D8DA1",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F459F312_E557_4B90_41DB_5862C721132A",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F09B7120_E75B_C7B0_41EA_1D9FC9837A62",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4440312_E557_4B90_41EA_B85BC89767AC",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4459312_E557_4B90_41E5_5E3CB8793C74",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F096E120_E75B_C7B0_41D5_BE1DABDE3372",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08EE13F_E75B_C790_41EC_07A3BD7E2B92",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0974120_E75B_C7B0_41DE_E3FC3385FAA8",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08B313F_E75B_C790_41E2_3C6119C5D737",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F45A5312_E557_4B90_41B9_A7565CB2C33E",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0924130_E75B_C790_41E1_615EFCE7506B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F092B130_E75B_C790_41E9_915A4275607D",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0950120_E75B_C7B0_41E4_36EDE8EF468E",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4437321_E557_4BB0_4195_0BFB523F1CFD",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08B513F_E75B_C790_41DC_B2AAF5ABDEFB",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F089A13F_E75B_C790_41E0_471385B1E476",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F09B8120_E75B_C7B0_41A3_33BDB5D56E47",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08A613F_E75B_C790_41E1_742FE5E69F18",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4438321_E557_4BB0_4146_550BE8D8E734",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08D113F_E75B_C790_41C0_77A3A9F007A3",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0930130_E75B_C790_41CE_2A256C8B6BA5",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0969130_E75B_C790_41D4_B153233B951C",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F096B120_E75B_C7B0_41E2_BD1321EF20EA",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F440F321_E557_4BB0_41E6_1A580CFEBA3B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0909130_E75B_C790_41DE_B944E7023ACB",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F442B321_E557_4BB0_41E0_F6EBD0D77668",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F084C13F_E75B_C790_41DD_5F60E05BC9A9",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08DB13F_E75B_C790_41C8_1AD830B6DD15",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F091B130_E75B_C790_41D3_452A1F0354C6",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4455312_E557_4B90_41B9_60E5F2015EDD",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F088313F_E75B_C790_41D8_4F7FB3933BBF",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F45DE312_E557_4B90_41BF_7DCD6C99B054",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4438321_E557_4BB0_41E4_A2B81810E7DA",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08E913F_E75B_C790_41E3_9241C8AAD907",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0931130_E75B_C790_41EB_F10CA490AA4A",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F458A312_E557_4B90_41E6_F0FD1CE22F2D",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F097B120_E75B_C7B0_41E3_CE6F21E5E94F",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08D4130_E75B_C790_41D1_4BB2237F4513",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0955120_E75B_C7B0_41EA_9454B8A00594",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F447D312_E557_4B90_41C6_A6D1213FC176",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08F113F_E75B_C790_41EA_7D7A02301EEC",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08EA13F_E75B_C790_41E1_B534F34DD268",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0978130_E75B_C790_41EC_52943B595577",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F089213F_E75B_C790_41AC_C07C7537C66F",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F085513F_E75B_C790_41E0_D679F4210170",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "items": [
  {
   "media": "this.panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F4D28648_E4EB_4DF0_41B7_A455B937114B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F08CA130_E75B_C790_41B8_F10A9D28E145, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F08D7130_E75B_C790_41D9_BAA62DE82F82, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F45DA312_E557_4B90_41B8_0006FF863D21, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F08D4130_E75B_C790_41D1_4BB2237F4513, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45DE312_E557_4B90_41BF_7DCD6C99B054, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F08D113F_E75B_C790_41C0_77A3A9F007A3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F45A5312_E557_4B90_41B9_A7565CB2C33E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F08DD13F_E75B_C790_41D8_78844D237D01, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F45A8312_E557_4B90_41D3_3F0CEDD16ED8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F08DB13F_E75B_C790_41C8_1AD830B6DD15, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F45AA312_E557_4B90_41E6_BDF9936B2A9C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F08E713F_E75B_C790_41DA_F43622BE78B4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F45B1312_E557_4B90_41D7_23EDD913A68F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F08E513F_E75B_C790_41B6_A500FCBA20CC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F45B5312_E557_4B90_41E5_7E80C1B8450B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 0, 1); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F4D28648_E4EB_4DF0_41B7_A455B937114B, 'showEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F45DA312_E557_4B90_41B8_0006FF863D21, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45DE312_E557_4B90_41BF_7DCD6C99B054, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F45A5312_E557_4B90_41B9_A7565CB2C33E, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F45A8312_E557_4B90_41D3_3F0CEDD16ED8, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F45AA312_E557_4B90_41E6_BDF9936B2A9C, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F45B1312_E557_4B90_41D7_23EDD913A68F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F45B5312_E557_4B90_41E5_7E80C1B8450B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBA2168E_E110_87A8_41BB_039DD0DBA886_camera",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_EC0E1727_E113_8698_41DC_8675C624F065",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F08E013F_E75B_C790_41E6_C1350F8B7B04, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_417F_246333C3D69F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F45BD312_E557_4B90_41D3_EC378C0F8DB1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F08EE13F_E75B_C790_41EC_07A3BD7E2B92, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F08E913F_E75B_C790_41E3_9241C8AAD907, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45BE312_E557_4B90_41D7_32AC5DD70064, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F08DE13F_E75B_C790_41D1_1C59A97F8C28, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4585312_E557_4B90_41B3_47BE9709425B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F08DC13F_E75B_C790_41E8_070D72C833BB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4589312_E557_4B90_41D5_B8CFA05EEAE0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F08D813F_E75B_C790_41A3_EECCF7BFEA80, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F458A312_E557_4B90_41E6_F0FD1CE22F2D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F08E513F_E75B_C790_41E3_93D26D91B03F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F458E312_E557_4B90_41D1_1542701C43F2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F08E213F_E75B_C790_41DC_0D32654E7620, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4597312_E557_4B90_41EA_CACB80574F69, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 1, 2); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_417F_246333C3D69F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F45BD312_E557_4B90_41D3_EC378C0F8DB1, 'showEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F45BE312_E557_4B90_41D7_32AC5DD70064, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4585312_E557_4B90_41B3_47BE9709425B, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4589312_E557_4B90_41D5_B8CFA05EEAE0, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F458A312_E557_4B90_41E6_F0FD1CE22F2D, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F458E312_E557_4B90_41D1_1542701C43F2, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4597312_E557_4B90_41EA_CACB80574F69, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EC0E1727_E113_8698_41DC_8675C624F065_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F08EC13F_E75B_C790_41DD_191A07B4291E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D34649_E4EB_4DF0_41E8_487C30F435AB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F08EA13F_E75B_C790_41E1_B534F34DD268, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F458B312_E557_4B90_41C1_8A3ED755B6F7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F458C312_E557_4B90_41D9_4283497D67CD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F08F713F_E75B_C790_41E9_BF605DD5E817, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F08F213F_E75B_C790_41E8_AE92EB6FD6F2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4593312_E557_4B90_41DB_FE23B2777F9F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F08F113F_E75B_C790_41EA_7D7A02301EEC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4594312_E557_4B90_41CB_75C587B1E1AD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F08FD13F_E75B_C790_41A3_0B0905B21BA9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4598312_E557_4B90_4189_4E5B3C8826EC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F08FA13F_E75B_C790_41E6_1DB859F5FBE8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F459F312_E557_4B90_41DB_5862C721132A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F08F813F_E75B_C790_41DC_B64CCADC0A79, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4462312_E557_4B90_41E0_AF2DB2EAE41A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 2, 3); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D34649_E4EB_4DF0_41E8_487C30F435AB, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F458B312_E557_4B90_41C1_8A3ED755B6F7, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F458C312_E557_4B90_41D9_4283497D67CD, 'showEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4593312_E557_4B90_41DB_FE23B2777F9F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4594312_E557_4B90_41CB_75C587B1E1AD, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4598312_E557_4B90_4189_4E5B3C8826EC, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F459F312_E557_4B90_41DB_5862C721132A, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4462312_E557_4B90_41E0_AF2DB2EAE41A, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED22C54D_E113_BAA8_41E0_5E1678F87569_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED20D418_E113_BAA9_41E3_643C96320E0E",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F088313F_E75B_C790_41D8_4F7FB3933BBF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_41C1_FBBAAB48C111, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F088013F_E75B_C790_41CE_3E37287BB7DD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F446C312_E557_4B90_41D9_41D147ACD956, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F088C13F_E75B_C790_41EB_0885A97792D7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4471312_E557_4B90_41E7_71303F9C402A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F4475312_E557_4B90_41DB_624431405AE4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F088913F_E75B_C790_41DC_39FDA924A0B3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F089513F_E75B_C790_41E1_54B215DED0F9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F447B312_E557_4B90_41DD_219864E8A35E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F089213F_E75B_C790_41AC_C07C7537C66F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4464312_E557_4B90_41CD_B3F91755EBC0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F089F13F_E75B_C790_41CE_E7BEBF5ACBCD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4468312_E557_4B90_41DA_C927ED534DF8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F089A13F_E75B_C790_41E4_4E47218CCE4D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F446F312_E557_4B90_41E6_1CCC3E871212, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 3, 4); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D30649_E4EB_4DF0_41C1_FBBAAB48C111, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F446C312_E557_4B90_41D9_41D147ACD956, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4471312_E557_4B90_41E7_71303F9C402A, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F4475312_E557_4B90_41DB_624431405AE4, 'showEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F447B312_E557_4B90_41DD_219864E8A35E, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4464312_E557_4B90_41CD_B3F91755EBC0, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4468312_E557_4B90_41DA_C927ED534DF8, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F446F312_E557_4B90_41E6_1CCC3E871212, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F08A613F_E75B_C790_41E1_742FE5E69F18, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3664A_E4EB_4DF0_41E4_E7C416968DFF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F08A413F_E75B_C790_41EB_645B19A695BF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4479312_E557_4B90_41C3_8C57C9099EA6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F08A113F_E75B_C790_41C3_8DD3DD12FED1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F447D312_E557_4B90_41C6_A6D1213FC176, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F08AC13F_E75B_C790_41EC_BDE5AFC49812, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4440312_E557_4B90_41EA_B85BC89767AC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F4445312_E557_4B90_41E6_275C70805181, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F08AA13F_E75B_C790_41E5_358351CEE20E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F08B713F_E75B_C790_41E3_BB4A5C4387F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4446312_E557_4B90_41C5_1F2C501C83F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F089E13F_E75B_C790_41C9_2D30DAA41189, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F444C312_E557_4B90_41E3_715A526457C8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F089A13F_E75B_C790_41E0_471385B1E476, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4453312_E557_4B90_41E1_232500A45164, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 4, 5); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3664A_E4EB_4DF0_41E4_E7C416968DFF, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4479312_E557_4B90_41C3_8C57C9099EA6, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F447D312_E557_4B90_41C6_A6D1213FC176, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F4440312_E557_4B90_41EA_B85BC89767AC, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F4445312_E557_4B90_41E6_275C70805181, 'showEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4446312_E557_4B90_41C5_1F2C501C83F9, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F444C312_E557_4B90_41E3_715A526457C8, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F4453312_E557_4B90_41E1_232500A45164, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECB5B886_E110_8B98_41DF_ED55A5C079E1_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F08A613F_E75B_C790_41D1_878FBFBF830E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3A64A_E4EB_4DF0_41DB_4FB61F3809F6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F08A213F_E75B_C790_41E3_20A8A3BF9A34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F445D312_E557_4B90_41D9_94009C5D6B50, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F08A013F_E75B_C790_41DE_063AEE57691A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4449312_E557_4B90_41E1_18B235A09C0A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F08AA13F_E75B_C790_41D4_AD5D66D99D08, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F444D312_E557_4B90_41C2_A44D27E103E4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F08B513F_E75B_C790_41DC_B2AAF5ABDEFB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4451312_E557_4B90_41BB_D1E30B75B982, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F4455312_E557_4B90_41B9_60E5F2015EDD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F08B313F_E75B_C790_41E2_3C6119C5D737, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F08BF13F_E75B_C790_41D9_169415EFEDA9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4459312_E557_4B90_41E5_5E3CB8793C74, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F08BD13F_E75B_C790_41A9_BE76983C74A9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F445C312_E557_4B90_41DF_8AB9B3695731, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 5, 6); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3A64A_E4EB_4DF0_41DB_4FB61F3809F6, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F445D312_E557_4B90_41D9_94009C5D6B50, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4449312_E557_4B90_41E1_18B235A09C0A, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F444D312_E557_4B90_41C2_A44D27E103E4, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4451312_E557_4B90_41BB_D1E30B75B982, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F4455312_E557_4B90_41B9_60E5F2015EDD, 'showEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4459312_E557_4B90_41E5_5E3CB8793C74, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F445C312_E557_4B90_41DF_8AB9B3695731, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF66121D_E111_9EA8_41D6_D0B045F51B40_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED295C82_E113_8B98_417B_259349441C82",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F084713F_E75B_C790_41E1_ADCBA5AADB67, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4423312_E557_4B90_41C9_07E36608B266, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F084613F_E75B_C790_4194_BCAFD1222FA5, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4426312_E557_4B90_41D5_7FEAECC3B01E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F084213F_E75B_C790_41E8_4BBAD9070C07, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F442A312_E557_4B90_41D3_967FC8C89196, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F084F13F_E75B_C790_41E0_7A2039904ACB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F442E321_E557_4BB0_41E8_65D132CE354B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F084C13F_E75B_C790_41DD_5F60E05BC9A9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4435321_E557_4BB0_41D0_CFFAFFD366B0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F084913F_E75B_C790_41DD_146362975D5C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4438321_E557_4BB0_4146_550BE8D8E734, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F4425321_E557_4BB0_41C8_9DBEE82A8D6D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F085513F_E75B_C790_41E0_D679F4210170, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F085213F_E75B_C790_41EA_ECE01830B9E5, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F442B321_E557_4BB0_41E0_F6EBD0D77668, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 6, 7); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4423312_E557_4B90_41C9_07E36608B266, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4426312_E557_4B90_41D5_7FEAECC3B01E, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F442A312_E557_4B90_41D3_967FC8C89196, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F442E321_E557_4BB0_41E8_65D132CE354B, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4435321_E557_4BB0_41D0_CFFAFFD366B0, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4438321_E557_4BB0_4146_550BE8D8E734, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F4425321_E557_4BB0_41C8_9DBEE82A8D6D, 'showEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F442B321_E557_4BB0_41E0_F6EBD0D77668, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED295C82_E113_8B98_417B_259349441C82_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  },
  {
   "media": "this.panorama_ED20170F_E113_86A7_41E8_5A6983248909",
   "end": "if(this.existsKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')){ if(this.getKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F')) { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true, -1, this.effect_F085D14F_E75B_C7F0_41C9_9D3DFA8192B2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3E64A_E4EB_4DF0_41D8_CE36C56BF97F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F'); if(this.existsKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')){ if(this.getKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B')) { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true, -1, this.effect_F085A14F_E75B_C7F0_41E7_1216DAEFC38B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4437321_E557_4BB0_4195_0BFB523F1CFD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B'); if(this.existsKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')){ if(this.getKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC')) { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true, -1, this.effect_F086614F_E75B_C7F0_41E7_AD9C3701A2E6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4438321_E557_4BB0_41E4_A2B81810E7DA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC'); if(this.existsKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')){ if(this.getKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7')) { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true, -1, this.effect_F086114F_E75B_C7F0_41E7_280BEA81E577, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F443D321_E557_4BB0_41E4_13582ACEAA42, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7'); if(this.existsKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')){ if(this.getKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0')) { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true, -1, this.effect_F086E14F_E75B_C7F0_41E2_A5D94D30F89C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4400321_E557_4BB0_41C0_9A2C01390B3C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0'); if(this.existsKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')){ if(this.getKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E')) { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true, -1, this.effect_F086B14F_E75B_C7F0_41E6_A4688DED55A8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4402321_E557_4BB0_41EB_14227F330536, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E'); if(this.existsKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')){ if(this.getKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3')) { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true, -1, this.effect_F086914F_E75B_C7F0_41D6_BF7BA97EE92E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4409321_E557_4BB0_41D7_7A2C36C96509, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3'); if(this.existsKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')){ if(this.getKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')) { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F440F321_E557_4BB0_41E6_1A580CFEBA3B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false, -1, this.effect_F087614F_E75B_C7F0_41BC_4A20CFB9427A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543')",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543', this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.get('visible')); this.registerKey('visibility_Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3', this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.get('visible')); this.registerKey('visibility_Image_F405943F_E53B_4D90_41EA_F773019F683E', this.Image_F405943F_E53B_4D90_41EA_F773019F683E.get('visible')); this.registerKey('visibility_Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0', this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.get('visible')); this.registerKey('visibility_Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7', this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.get('visible')); this.registerKey('visibility_Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC', this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.get('visible')); this.registerKey('visibility_Image_F401760A_E52B_4D70_41EA_C6071182F84B', this.Image_F401760A_E52B_4D70_41EA_C6071182F84B.get('visible')); this.registerKey('visibility_Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F', this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.get('visible')); this.setEndToItemIndex(this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist, 7, 0); this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false); this.setComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, false, -1, this.effect_F4D3E64A_E4EB_4DF0_41D8_CE36C56BF97F, 'hideEffect', false); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false); this.setComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, false, -1, this.effect_F4437321_E557_4BB0_4195_0BFB523F1CFD, 'hideEffect', false); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false); this.setComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, false, -1, this.effect_F4438321_E557_4BB0_41E4_A2B81810E7DA, 'hideEffect', false); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false); this.setComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, false, -1, this.effect_F443D321_E557_4BB0_41E4_13582ACEAA42, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false); this.setComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, false, -1, this.effect_F4400321_E557_4BB0_41C0_9A2C01390B3C, 'hideEffect', false); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false); this.setComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, false, -1, this.effect_F4402321_E557_4BB0_41EB_14227F330536, 'hideEffect', false); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false); this.setComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, false, -1, this.effect_F4409321_E557_4BB0_41D7_7A2C36C96509, 'hideEffect', false); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, false); this.setComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true, -1, this.effect_F440F321_E557_4BB0_41E6_1A580CFEBA3B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED20170F_E113_86A7_41E8_5A6983248909_camera",
   "start": "this.keepComponentVisibility(this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F, true); this.keepComponentVisibility(this.Image_F401760A_E52B_4D70_41EA_C6071182F84B, true); this.keepComponentVisibility(this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC, true); this.keepComponentVisibility(this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7, true); this.keepComponentVisibility(this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0, true); this.keepComponentVisibility(this.Image_F405943F_E53B_4D90_41EA_F773019F683E, true); this.keepComponentVisibility(this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3, true); this.keepComponentVisibility(this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543, true)"
  }
 ],
 "id": "ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist",
 "class": "PlayList"
},
{
 "id": "effect_F444D312_E557_4B90_41C2_A44D27E103E4",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F086B14F_E75B_C7F0_41E6_A4688DED55A8",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0979120_E75B_C7B0_41E1_FA33335CBE22",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F084213F_E75B_C790_41E8_4BBAD9070C07",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4D30649_E4EB_4DF0_41C1_FBBAAB48C111",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08D7130_E75B_C790_41D9_BAA62DE82F82",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F443D321_E557_4BB0_41E4_13582ACEAA42",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08E513F_E75B_C790_41E3_93D26D91B03F",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ED20D418_E113_BAA9_41E3_643C96320E0E",
 "thumbnailUrl": "media/panorama_ED20D418_E113_BAA9_41E3_643C96320E0E_t.jpg",
 "label": "MERCURIO",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "id": "effect_F090B130_E75B_C790_41E2_534166B84D1B",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4471312_E557_4B90_41E7_71303F9C402A",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "MARTE",
 "id": "panorama_EC0E1727_E113_8698_41DC_8675C624F065",
 "thumbnailUrl": "media/panorama_EC0E1727_E113_8698_41DC_8675C624F065_t.jpg",
 "hfovMin": "173%",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 137
},
{
 "id": "effect_F089E13F_E75B_C790_41C9_2D30DAA41189",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F093E130_E75B_C790_41E4_AF76431AC2C0",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F088C13F_E75B_C790_41EB_0885A97792D7",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4402321_E557_4BB0_41EB_14227F330536",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F089F13F_E75B_C790_41CE_E7BEBF5ACBCD",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4446312_E557_4B90_41C5_1F2C501C83F9",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4400321_E557_4BB0_41C0_9A2C01390B3C",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F4479312_E557_4B90_41C3_8C57C9099EA6",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08AA13F_E75B_C790_41D4_AD5D66D99D08",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F442A312_E557_4B90_41D3_967FC8C89196",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F0941120_E75B_C7B0_41D9_E7A5EE0F7E71",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F093B130_E75B_C790_41E4_5D4664A74A64",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "id": "panorama_ED20170F_E113_86A7_41E8_5A6983248909",
 "thumbnailUrl": "media/panorama_ED20170F_E113_86A7_41E8_5A6983248909_t.jpg",
 "label": "NEPTUNO",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "id": "effect_F0938130_E75B_C790_41D8_13ABD9C5FB74",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4D30649_E4EB_4DF0_417F_246333C3D69F",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F09B3120_E75B_C7B0_41C4_E5D522F1DBC8",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08E713F_E75B_C790_41DA_F43622BE78B4",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F086614F_E75B_C7F0_41E7_AD9C3701A2E6",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0916130_E75B_C790_41CF_5A94D593CE9C",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F085D14F_E75B_C7F0_41C9_9D3DFA8192B2",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F0936130_E75B_C790_41E9_025D17BD4033",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F445C312_E557_4B90_41DF_8AB9B3695731",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08C2130_E75B_C790_41C5_26CE5B910823",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F4409321_E557_4BB0_41D7_7A2C36C96509",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F08A113F_E75B_C790_41C3_8DD3DD12FED1",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08E013F_E75B_C790_41E6_C1350F8B7B04",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F085213F_E75B_C790_41EA_ECE01830B9E5",
 "easing": "cubic_in_out",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "id": "effect_F08F713F_E75B_C790_41E9_BF605DD5E817",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "effect_F458E312_E557_4B90_41D1_1542701C43F2",
 "easing": "cubic_in_out",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "right": 0,
 "width": "99.922%",
 "toolTipOpacity": 1,
 "shadow": false,
 "minHeight": 50,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingBottom": 0,
 "playbackBarProgressBorderColor": "#000000",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "borderSize": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "id": "Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F",
 "width": "34.537%",
 "class": "Image",
 "right": "31.11%",
 "shadow": false,
 "minHeight": 1,
 "url": "skin/Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F.png",
 "minWidth": 1,
 "maxWidth": 1871,
 "top": "38.94%",
 "maxHeight": 641,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "20.839%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "LOS PLANETAS"
 }
},
{
 "id": "Image_F401760A_E52B_4D70_41EA_C6071182F84B",
 "left": "2.52%",
 "width": "44.741%",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_F401760A_E52B_4D70_41EA_C6071182F84B.png",
 "minWidth": 1,
 "maxWidth": 2647,
 "top": "5.85%",
 "maxHeight": 453,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "15.051%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "MARTE"
 }
},
{
 "id": "Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC",
 "left": "2.51%",
 "width": "44.976%",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC.png",
 "minWidth": 1,
 "maxWidth": 2730,
 "top": "6.55%",
 "maxHeight": 439,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "13.893%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "VENUS"
 }
},
{
 "id": "Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7",
 "left": "2.43%",
 "width": "47.802%",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7.png",
 "minWidth": 1,
 "maxWidth": 2928,
 "top": "5.25%",
 "maxHeight": 409,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "15.774%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "MERCURIO"
 }
},
{
 "id": "Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0",
 "left": "2.61%",
 "width": "47.928%",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0.png",
 "minWidth": 1,
 "maxWidth": 2805,
 "top": "5.14%",
 "maxHeight": 427,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "15.34%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "JUPITER"
 }
},
{
 "id": "Image_F405943F_E53B_4D90_41EA_F773019F683E",
 "left": "0%",
 "width": "50.157%",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_F405943F_E53B_4D90_41EA_F773019F683E.png",
 "minWidth": 1,
 "maxWidth": 2708,
 "top": "5.72%",
 "maxHeight": 443,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "13.459%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "SATURNO"
 }
},
{
 "id": "Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3",
 "left": "0.55%",
 "width": "21.177%",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3.png",
 "minWidth": 1,
 "maxWidth": 1016,
 "top": "5.35%",
 "maxHeight": 465,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "13.748%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "URANO"
 }
},
{
 "id": "Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543",
 "left": "2.53%",
 "width": "19.859%",
 "class": "Image",
 "minHeight": 1,
 "shadow": false,
 "url": "skin/Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543.png",
 "minWidth": 1,
 "maxWidth": 1156,
 "top": "5.34%",
 "maxHeight": 465,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "14.038%",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "verticalAlign": "middle",
 "visible": false,
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "NEPTUNO"
 }
},
{
 "itemThumbnailShadowColor": "#000000",
 "id": "ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A",
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "class": "ThumbnailList",
 "right": "6.65%",
 "itemLabelHorizontalAlign": "center",
 "shadow": false,
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "width": "65.684%",
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowOpacity": 0.54,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontFamily": "Arial",
 "itemBorderRadius": 0,
 "paddingRight": 20,
 "height": 134,
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailBorderRadius": 50,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "verticalAlign": "top",
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "layout": "horizontal",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 20,
 "playList": "this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "paddingLeft": 20,
 "bottom": "4.2%",
 "horizontalAlign": "left",
 "itemLabelFontColor": "#FFFFFF",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemThumbnailHeight": 75,
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "itemLabelGap": 9,
 "itemThumbnailShadow": true,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemThumbnailWidth": 75,
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A_playlist,this.mainPlayList])",
 "data": {
  "name": "Player436"
 },
 "children": [
  "this.MainViewer",
  "this.Image_F4CDB152_E4EC_C790_41D6_C72EEFF43B5F",
  "this.Image_F401760A_E52B_4D70_41EA_C6071182F84B",
  "this.Image_F44A55CB_E535_4EF0_41E9_9C47A4C096AC",
  "this.Image_F476ED17_E53C_BF90_41DB_5549E8BE8BD7",
  "this.Image_F5DBEFF9_E53C_BA90_41E9_035DE393E4D0",
  "this.Image_F405943F_E53B_4D90_41EA_F773019F683E",
  "this.Image_F4E6DE8D_E534_DD70_41EA_0985FDFB66B3",
  "this.Image_F5B873FF_E537_4A90_41C3_E96C9BC8D543",
  "this.ThumbnailList_F2C75707_E75F_CB70_41B6_75DE30A2BB6A"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "width": "100%",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; }
 },
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "gap": 10,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
