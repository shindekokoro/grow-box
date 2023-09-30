import Chart from 'chart.js/auto'
//do fetch request from progress route for actual info
(async function() {
    const dummyData = [
        { day: 1, growth: 2},
        { day: 2, growth: 3},
        { day: 3, growth: 4},
        { day: 4, growth: 1},
        { day: 5, growth: 6},
        { day: 6, growth: 7},
        { day: 7, growth: 8}
    ];

    new Chart(
        document.getElementById('progress'),
        {
            type: 'line',
            data: {
                labels: dummyData.map(row => row.day),
                datasets: [
                    {
                        label: 'Growth by day',
                        data: dummyData.map(row => row.growth)
                    }
                ]
            }
        }
    );
})();

//404 error whenever page is loaded