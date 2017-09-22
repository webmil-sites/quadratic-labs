var ctx1 = document.getElementById('chart1').getContext('2d');
var chart1= new Chart(ctx1, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            backgroundColor: ["#fe0000", "#ff6d25", "#b51c4f"],
            borderColor: '#0000D8',
            data: [50, 20, 30]
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {enabled: false},
        hover: {mode: null},
        rotation: 90.5
    }
});

var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2= new Chart(ctx2, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            backgroundColor: ["#fe0000", "#ff6d25", "#b51c4f"],
            borderColor: '#0000D8',
            data: [50, 20, 30]
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {enabled: false},
        hover: {mode: null},
        rotation: 90.5
    }
});

// var ctx3 = document.getElementById('chart3').getContext('2d');
// var chart3= new Chart(ctx3, {
//     // The type of chart we want to create
//     type: 'doughnut',

//     // The data for our dataset
//     data: {
//         datasets: [{
//             backgroundColor: ["#fe0000", "#ff6d25", "#b51c4f"],
//             borderColor: '#0000D8',
//             data: [80, 20]
//         }]
//     },

//     // Configuration options go here
//     options: {
//         tooltips: {enabled: false},
//         hover: {mode: null},
//         rotation: 90
//     }
// });

var ctx4 = document.getElementById('chart4').getContext('2d');
var chart4= new Chart(ctx4, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            backgroundColor: ["#fe0000", "#ff6d25", "#b51c4f"],
            borderColor: '#0000D8',
            data: [80, 10, 10]
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {enabled: false},
        hover: {mode: null},
        rotation: 89.3
    }
});