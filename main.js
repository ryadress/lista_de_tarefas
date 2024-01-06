$('#add-task-form').submit(function(event){
    Event.preventDefault();
    var taskName = $('#task-name').val();
    if(taskName.trim()!== '') {
        $('#task-list').append('<li>' + taskName + '</li>');
        $('#task-name').val('');
    }
});

$('#task-list').on('click','li',function(){
    $(this).toggClass('completed');
})