const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	li.addEventListener('click', function () {
		allSideMenu.forEach(li=> {
			li.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
//line chart
const xValues = [2,4,6,8,10,12,14,16,18,20,22,24,26,29];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];
let mychart=document.getElementById('myChart');

new Chart("myChart", {
	type: "line",
	data: {
	  labels: xValues,
	  datasets: [{
		fill: false,
		lineTension: 0,
		backgroundColor: "#FFF2C6",
		borderColor: "#DB504A",
		data: yValues
	  }]
	},
	options: {
	  legend: {display: false},
	  scales: {
		yAxes: [{ticks: {min: 6, max:16}}],
	  }
	}
  });

var xValues2 = ["immaculée", "dune", "awlad el hay", "rest demain"];
var yValues2 = [155, 149, 64, 24, 15];
var barColors = ["#F1C40F", "green","blue","brown"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues2,
    datasets: [{
      backgroundColor: barColors,
      data: yValues2
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      
    }
  }
});
