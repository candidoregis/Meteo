/**
 * EXAMPLE OF API GET RESPONSE JSON FORMAT
 * 
 * http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civil&output=json
 * 
 * {
	"product" : "civil" ,
	"init" : "2023121318" ,
	"dataseries" : [
	{
		"timepoint" : 3,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 23,
		"rh2m" : "75%",
		"wind10m" : {
			"direction" : "SE",
			"speed" : 2
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 6,
		"cloudcover" : 9,
		"lifted_index" : 6,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 23,
		"rh2m" : "75%",
		"wind10m" : {
			"direction" : "E",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 9,
		"cloudcover" : 9,
		"lifted_index" : 6,
		"prec_type" : "none",
		"prec_amount" : 1,
		"temp2m" : 24,
		"rh2m" : "75%",
		"wind10m" : {
			"direction" : "NE",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 12,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 25,
		"rh2m" : "60%",
		"wind10m" : {
			"direction" : "SE",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 15,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 26,
		"rh2m" : "62%",
		"wind10m" : {
			"direction" : "SE",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 18,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 25,
		"rh2m" : "69%",
		"wind10m" : {
			"direction" : "SE",
			"speed" : 2
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 21,
		"cloudcover" : 5,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 24,
		"rh2m" : "71%",
		"wind10m" : {
			"direction" : "E",
			"speed" : 2
		},
		"weather" : "pcloudynight"
	},
	{
		"timepoint" : 24,
		"cloudcover" : 7,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 24,
		"rh2m" : "75%",
		"wind10m" : {
			"direction" : "E",
			"speed" : 2
		},
		"weather" : "mcloudynight"
	},
	{
		"timepoint" : 27,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 24,
		"rh2m" : "70%",
		"wind10m" : {
			"direction" : "E",
			"speed" : 2
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 30,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 24,
		"rh2m" : "75%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 1
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 33,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 25,
		"rh2m" : "70%",
		"wind10m" : {
			"direction" : "SE",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 36,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 27,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "SE",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 39,
		"cloudcover" : 7,
		"lifted_index" : 2,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 27,
		"rh2m" : "55%",
		"wind10m" : {
			"direction" : "SE",
			"speed" : 2
		},
		"weather" : "mcloudyday"
	},
	{
		"timepoint" : 42,
		"cloudcover" : 8,
		"lifted_index" : 2,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 26,
		"rh2m" : "69%",
		"wind10m" : {
			"direction" : "E",
			"speed" : 2
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 45,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 26,
		"rh2m" : "70%",
		"wind10m" : {
			"direction" : "E",
			"speed" : 2
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 48,
		"cloudcover" : 9,
		"lifted_index" : 2,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 21,
		"rh2m" : "68%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 51,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 14,
		"rh2m" : "59%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 4
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 54,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 1,
		"temp2m" : 11,
		"rh2m" : "59%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 4
		},
		"weather" : "lightrainday"
	},
	{
		"timepoint" : 57,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 10,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 4
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 60,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 10,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 4
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 63,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 10,
		"rh2m" : "58%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 4
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 66,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 69,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "61%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 72,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 7,
		"rh2m" : "59%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 75,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 7,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 78,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "51%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainday"
	},
	{
		"timepoint" : 81,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "58%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainday"
	},
	{
		"timepoint" : 84,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "59%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainday"
	},
	{
		"timepoint" : 87,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "60%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 90,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "62%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 93,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "56%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 2
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 96,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "55%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 2
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 99,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "61%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 2
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 102,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "60%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 105,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 11,
		"rh2m" : "55%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 108,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 14,
		"rh2m" : "54%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 111,
		"cloudcover" : 8,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 15,
		"rh2m" : "55%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 2
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 114,
		"cloudcover" : 8,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 13,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 117,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 13,
		"rh2m" : "64%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 120,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 12,
		"rh2m" : "70%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 123,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 10,
		"rh2m" : "66%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 126,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "63%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 129,
		"cloudcover" : 7,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 10,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "mcloudyday"
	},
	{
		"timepoint" : 132,
		"cloudcover" : 8,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 11,
		"rh2m" : "52%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 135,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 10,
		"rh2m" : "51%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 138,
		"cloudcover" : 8,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "57%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 141,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "55%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 144,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "60%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudynight"
	},
	{
		"timepoint" : 147,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "rain",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "60%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "lightrainnight"
	},
	{
		"timepoint" : 150,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 7,
		"rh2m" : "67%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 153,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "56%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 156,
		"cloudcover" : 7,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 11,
		"rh2m" : "49%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 4
		},
		"weather" : "mcloudyday"
	},
	{
		"timepoint" : 159,
		"cloudcover" : 4,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 12,
		"rh2m" : "44%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "pcloudyday"
	},
	{
		"timepoint" : 162,
		"cloudcover" : 3,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 10,
		"rh2m" : "43%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "pcloudynight"
	},
	{
		"timepoint" : 165,
		"cloudcover" : 2,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 7,
		"rh2m" : "48%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "clearnight"
	},
	{
		"timepoint" : 168,
		"cloudcover" : 2,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 6,
		"rh2m" : "50%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "clearnight"
	},
	{
		"timepoint" : 171,
		"cloudcover" : 3,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 4,
		"rh2m" : "59%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "pcloudynight"
	},
	{
		"timepoint" : 174,
		"cloudcover" : 3,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 4,
		"rh2m" : "55%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "pcloudyday"
	},
	{
		"timepoint" : 177,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 9,
		"rh2m" : "35%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 180,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 13,
		"rh2m" : "25%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 183,
		"cloudcover" : 9,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 14,
		"rh2m" : "18%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "cloudyday"
	},
	{
		"timepoint" : 186,
		"cloudcover" : 7,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 11,
		"rh2m" : "20%",
		"wind10m" : {
			"direction" : "NE",
			"speed" : 3
		},
		"weather" : "mcloudynight"
	},
	{
		"timepoint" : 189,
		"cloudcover" : 2,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 8,
		"rh2m" : "25%",
		"wind10m" : {
			"direction" : "NE",
			"speed" : 3
		},
		"weather" : "clearnight"
	},
	{
		"timepoint" : 192,
		"cloudcover" : 3,
		"lifted_index" : 15,
		"prec_type" : "none",
		"prec_amount" : 0,
		"temp2m" : 6,
		"rh2m" : "35%",
		"wind10m" : {
			"direction" : "N",
			"speed" : 3
		},
		"weather" : "pcloudynight"
	}
	]
}

 * 
 */