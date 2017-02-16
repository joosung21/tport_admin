// Datatable
var TableDatatables = function () {

    // Intit Datatable: member_list
    var initTable1 = function () {
        var table = $('#member_list');

        var oTable = table.dataTable({

            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                url: '/lang/dataTables.korean.lang.json',
            },

            buttons: [

            ],

            // setup responsive extension: http://datatables.net/extensions/responsive/
            responsive: false,
            //"ordering": false, disable column ordering
            //"paging": false, disable pagination

            colReorder: {
                reorderCallback: function () {
                    // console.log( 'callback' );
                }
            },

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "order": [
                [2, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {  // set default column settings
                    'orderable': false,
                    'targets': [3]
                },
                {
                    "searchable": false,
                    "targets": [3]
                },
                {
                    "className": "dt-center",
                    "targets": [0,2,3]
                }
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    var initTable2 = function () {
        var table = $('#member_list');

        var oTable = table.dataTable({

            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                url: '/lang/dataTables.korean.lang.json',
            },

            buttons: [

            ],

            // setup responsive extension: http://datatables.net/extensions/responsive/
            responsive: false,
            //"ordering": false, disable column ordering
            //"paging": false, disable pagination

            colReorder: {
                reorderCallback: function () {
                    // console.log( 'callback' );
                }
            },

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "order": [
                [2, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {  // set default column settings
                    'orderable': false,
                    'targets': [3]
                },
                {
                    "searchable": false,
                    "targets": [3]
                },
                {
                    "className": "dt-center",
                    "targets": [0,2,3]
                }
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

            initTable1();

        }

    };

}();

jQuery(document).ready(function() {
    TableDatatables.init();
});
