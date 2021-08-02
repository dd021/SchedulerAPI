let address = '/api/Schedules';

function displaySchedules() {
    $.ajax({
        type: "GET",
        url: address,
        cache: false,
        success: function (data) {
            $("#all_records").empty();
            if (data.length == 0) { 
                let html = "<h1>No Schedules</h1>";
                $("#all_records").append(html);
            } else {
                
                $.each(data, function (key, item) { 
                    let html = '<div class="col-md-6  mb-3"><div class="card col-md-12">';
                    html += '<div class="card-body">';
                    html += '<h5 class="card-title">' + item.title + '</h5>';
                    html += '<p class="card-text">' + item.details + '</p>';
                    html += '<p>Status: ' + item.status + '</p>';
                    html += '</div>';
                    html += '<div class="row mb-2">';
                    html += '<div class="col-md-6">';
                    html += '<button class="btn btn-info btn-block" onclick="getSchedule(' + item.id + ')" data-toggle="modal" data-target="#edit">Edit</button>';
                    html += '</div>';
                    html += '<div class="col-md-6">';
                    html += '<button class="btn btn-danger btn-block" onclick="deleteSchedule(' + item.id + ')">Delete</button>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div></div>';
                    $("#all_records").append(html);
                });
            }
        }
    });
}

function addSchedule() {
    
    let s_title = $('#title').val();
    let s_status = $('#status').val();
    let s_details = $('#details').val(); 
    let schedule = {
        title: s_title,
        details: s_details,
        status: s_status
    };
    $.ajax({
        type: "POST",
        url: address,
        data: JSON.stringify(schedule),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        alert("Schedule is Saved");
        displaySchedules();
    }).fail(function (xhr, status) {
        alert("Schedule is not Saved");
    });
}


function deleteSchedule(id) {
    let result = confirm("Are You Sure to Remove Your Schedule?");
    if (result) {
        $.ajax({
            type: "DELETE",
            url: address + "/" + id,
        }).done(function (response) {
            alert("Schedule is Removed From Database");
            displaySchedules();
        });
    }
}

function getSchedule(id) {
    $.ajax({
        type: "GET",
        url: address + "/" + id,
        contentType: "application/json"
    }).done(function (schedule) {
        $('#s_id').val(schedule.id);
        $('#s_details').val(schedule.details);
        $('#s_title').val(schedule.title);
        $('#s_status').val(schedule.status);
    });
}

function updateSchedule() {
    let s_id = parseInt($("#s_id").val());
    let s_title = $('#s_title').val();
    let s_status = $('#s_status').val();
    let s_details = $('#s_details').val();
    let schedule = {
        id: s_id,
        title: s_title,
        details: s_details,
        status: s_status
    };
    $.ajax({
        type: "PUT",
        url: address + "/" + s_id,
        data: JSON.stringify(schedule),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        alert("Schedule is Updated");
        displaySchedules();
    }).fail(function (xhr, status) {
        alert("Schedule is not Updated");
    });
}