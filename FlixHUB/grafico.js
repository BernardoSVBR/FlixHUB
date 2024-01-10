var isChartInitialized = false;
var clicksCount = 0;

var dummyData = {
  labels: ["Inicie selecionando um gênero"],
  datasets: [
    {
      data: [1],
      backgroundColor: ["#808080"],
      hoverOffset: 4,
    },
  ],
};

var realData = {
  labels: [
    "Ação",
    "Animação",
    "Aventura",
    "Comédia",
    "Documentário",
    "Drama",
    "Fantasia",
    "Faroeste/Western",
    "Ficção Científica",
    "Horror",
    "Guerra",
    "Musical",
    "Policial",
    "Romance",
    "Suspense",
    "Terror",
  ],
  datasets: [
    {
      data: Array(16).fill(0),
      backgroundColor: [],
      hoverOffset: 4,
    },
  ],
};

var options = {
  legend: {
    display: true,
    position: "bottom",
  },
};

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: dummyData,
  options: options,
});

function initializeChartColors() {
  var colors = [
    "#000080",
    "#FF6384",
    "#36A2EB",
    "#FF9F40",
    "#4BC0C0",
    "#9966FF",
    "#FFFFFF",
    "#FFCD56",
    "#32CD32",
    "#000000",
    "#800000",
    "#00CED1",
    "#FF4500",
    "#FF69B4",
    "#00FF00",
    "#FF0000",
  ];
  realData.datasets[0].backgroundColor = colors;
}

function initializeRandomData() {
  for (var i = 0; i < realData.datasets[0].data.length; i++) {
    realData.datasets[0].data[i] = Math.floor(Math.random() * 6); // Gera um número aleatório entre 0 e 5
  }
}

function updateChart(index) {
  if (clicksCount < 5) {
    if (!isChartInitialized) {
      initializeChartColors();
      initializeRandomData();
      myChart.data = realData;
      document.getElementById("chartTitle").innerText =
        "Gêneros que os usuários escolheram"; // Atualiza o título
      isChartInitialized = true;
    }

    realData.datasets[0].data[index] = realData.datasets[0].data[index] + 1;
    myChart.update();
    clicksCount += 1;
    console.log(clicksCount);
  } else {
    swal("Atenção!", "O máximo permitido é 5 gêneros.", "warning");
  }
}
