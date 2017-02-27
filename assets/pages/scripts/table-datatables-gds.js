// Datatable
var TableDatatables = function () {

    // Init Datatable: member_list
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

    // Init Datatable: vendor_list
    var initTable2 = function () {
        var table = $('#vendor_list');

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
                [0, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {
                    "className": "dt-center",
                    "targets": [1,2,3,4]
                }
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    // Init Datatable: Channel_list
    var initTable3 = function () {
        var table = $('#channel_list');

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
                [0, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {
                    "className": "dt-center",
                    "targets": [1,2,3,4,5]
                }
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    // Init Datatable: reservation_list
    var initTable4 = function () {
        var table = $('#reservation_list');

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
                [6, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {
                    "className": "dt-center",
                    "targets": [0,1,4,5,6,7,8,9]
                }
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    // Init Datatable: payment_channel_list
    var initTable5 = function () {
        var table = $('#payment_channel_list');

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
                [0, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {
                    "className": "dt-center",
                    "targets": [0,1,2,4,6,7]
                },
                {
                    "className": "dt-right",
                    "targets": [3,5]
                },
                {
                    "searchable": false,
                    "targets": [6,7]
                },
                {  // set default column settings
                    'orderable': false,
                    'targets': [6,7]
                },
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    // Init Datatable: payment_channel_list
    var initTable6 = function () {
        var table = $('#payment_seller_list');

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
                [0, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {
                    "className": "dt-center",
                    "targets": [0,1,2,3,5,7,8]
                },
                {
                    "className": "dt-right",
                    "targets": [4,6]
                },
                {
                    "searchable": false,
                    "targets": [7,8]
                },
                {  // set default column settings
                    'orderable': false,
                    'targets': [7,8]
                },
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    // Init Datatable: payment_channel_list
    var initTable7 = function () {
        var table = $('#vendor_payment_list');

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
                [0, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {
                    "className": "dt-center",
                    "targets": [0,1,3,5,6]
                },
                {
                    "className": "dt-right",
                    "targets": [2,4]
                },
                {
                    "searchable": false,
                    "targets": [5,6]
                },
                {  // set default column settings
                    'orderable': false,
                    'targets': [5,6]
                },
            ],

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    // Init Datatable: Channel_list
    var initTable8 = function () {
        var table = $('#seller_list');

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
                [0, 'desc']
            ],

            "lengthMenu": [
                [10, 15, 20, 30, -1],
                [10, 15, 20, 30, "전체"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,

            "columnDefs": [
                {
                    "className": "dt-center",
                    "targets": [0,4,5,6,7,8]
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
            initTable2();
            initTable3();
            initTable4();
            initTable5();
            initTable6();
            initTable7();
            initTable8();
        }

    };

}();

jQuery(document).ready(function() {
    TableDatatables.init();
});
