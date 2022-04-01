var tableData = [
  {
    'RollNo': '0',
    'Name': '0',
    'Email': '0',
  },
  {
    'RollNo': '1',
    'Name': '1',
    'Email': '1',
  },
  {
    'RollNo': '2',
    'Name': '2',
    'Email': '2',
  },
  {
    'RollNo': '3',
    'Name': '3',
    'Email': '3',
  },
  {
    'RollNo': '4',
    'Name': '4',
    'Email': '4',
  },
  {
    'RollNo': '5',
    'Name': '5',
    'Email': '5',
  },
  {
    'RollNo': '6',
    'Name': '6',
    'Email': '6',
  },
  {
    'RollNo': '7',
    'Name': '7',
    'Email': '7',
  },
  {
    'RollNo': '8',
    'Name': '8',
    'Email': '8',
  },
];

var state = {
  querySet: tableData,
  page: 1,
  rows: 3, // number of this that will be displayed at a time
};
buildTable();
//List();
function pagination(querySet, page, rows) {
  var trimStart = (page - 1) * rows;
  var trimEnd = trimStart + rows;

  var trimData = querySet.slice(trimStart, trimEnd);

  var pages = Math.ceil(querySet.length / rows);

  return {
    querySet: trimData,
    pages: pages,
  };
}

function pageButtons(pages) {
    //var wrapper=$('#pagination-wrapper');
    var wrapper=document.getElementById('pagination-wrapper');
    wrapper.innerHTML=``;
    console.log(pages);
    if(state.page==1) //next last
    {
        wrapper.innerHTML += `<button value=${1} class="next">next</button>`;
        wrapper.innerHTML+=`${state.page}`;
        wrapper.innerHTML += `<button value=${2} class="last">last</button>`;
    }
    else if(state.page==pages) // prev first
    {
        wrapper.innerHTML += `<button value=${3} class="first">first</button>`;
        wrapper.innerHTML+=`${state.page}`;
        wrapper.innerHTML += `<button value=${4} class="prev">prev</button>`;
    }
    else
    {
        wrapper.innerHTML += `<button value=${3} class="first">first</button>`;
        wrapper.innerHTML += `<button value=${4} class="prev">prev</button>`;
        wrapper.innerHTML+=`${state.page}`;
        wrapper.innerHTML += `<button value=${1} class="next">next</button>`;
        wrapper.innerHTML += `<button value=${2} class="last">last</button>`;
    }
    /*
    function changeRange()
    {
        let val= document.getElementById('myRange').value;
        console.log(val);
        state.rows=val;
        buildTable();
    }

    $('#myRange').on("click",changeRange());*/
    
    $('.first').on('click',function(){ 
        $('#table-body').empty();
        
        state.page=1;

        buildTable();
    });
    $('.prev').on('click',function(){
        $('#table-body').empty();

        state.page=state.page-1;

        buildTable();
    });
    $('.next').on('click',function(){
        $('#table-body').empty();

        state.page=state.page+1;

        buildTable();
    });
    $('.last').on('click',function(){

        $('#table-body').empty();

        state.page=pages;

        buildTable();
    });
}

// CODE TEMPLATE provided on assignment
const List = function(element, listItems){
	// sample template
	this.pageSize = 10;
	this.currentPage = 1;
	this.render = function(){
                //Empty previous entries
	     $(element).html('');
               //Code to push page data
               // Here goes your code
	};
	this.navigateFirst = function(){
    state.page=1;
        buildTable();
  };
	this.navigateLast = function(){
    state.page=pages;

        buildTable();
  };
	this.navigatePrev = function(){
    state.page=state.page-1;

        buildTable();
  };
	this.navigateNext = function(){
    state.page=state.page+1;

        buildTable();
  };

  $('.first',this.navigateFirst);
  $('.prev',this.navigatePrev);
  $('.next',this.navigateNext);
  $('.last',this.navigateLast);

};

function buildTable() {
    var table = $('#table-body')

    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet

    for (var i = 1 in myList) {
        var row = `<tr>
              <td>${myList[i].RollNo}</td>
              <td>${myList[i].Name}</td>
              <td>${myList[i].Email}</td>
              `
        table.append(row)
    }

    pageButtons(data.pages)
}
