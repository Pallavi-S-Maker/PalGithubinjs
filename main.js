$(document).ready(function(){
     $('#searchUser').on('keyup',function(e){
 // console.log('tfjgfgh');
 let username=e.target.value;
 $.ajax({
     url:'https://api.github.com/users/'+username,
     data:{
         client_id:'d1a64e4606a4f57a66441',
         client_secrte:'efa5f86a967bb110ea15ead4e18e5db12b5efc90'
     }
 }).done(function(user){
    $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
            client_id:'d1a64e4606a4f57a66441',
            client_secrte:'efa5f86a967bb110ea15ead4e18e5db12b5efc90',
            sort:'created:asc',
            per_page:5
        }
    }).done(function(repos){
        $.each(repos,function(index,repo){
            $('#repos').append(`
            <div class="well">
            <div class="row">
            <div class="col-md-7">
             <strong>${repo.name}</strong>:${repo.description}
            </div>
            <div class="col-md-3">
            <span class="badge badge-primary p-2 mb-1">Forkss: ${repo.forks_count}</span>
            <span class="badge badge-success p-2 mb-1">WatchersGists: ${repo.watchers_count}</span>
            <span class="badge badge-info p-2 mb-1">Stars: ${repo.stargazers_count}</span>

            </div>
            <div class="col-md-2">
            <a class="btn btn-primary btn-block mb-4" href="${repo.html_url}" target="_blank">Repo Page</a>
            </div>
            </div>
            </div>
            `);
            

        });
    });
     $('#profile').html(`
      <div class="panel panel-default">
       <div class="panel-heading">
      <h3 class="panel-title">${user.name}</h3></div>
      <div class="panel-body">
      <div class="row">
      <div class="col-md-3"><img class="thumbnali avatar" src="${user.avatar_url}">
      <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
      </div>
      <div class="col-md-9">
      <span class="badge badge-primary p-2 mb-1">Public Repos: ${user.public_repos}</span>
      <span class="badge badge-secondary p-2 mb-1">Public Gists: ${user.public_gists}</span>
      <span class="badge badge-success p-2 mb-1">Followers: ${user.followers}</span>
      <span class="badge badge-info p-2 mb-1">Following: ${user.following}</span>

      
       <br><br>
      
       
       <ul class="list-group mt-4">
    
       <li class="list-group-item"><b>Company:</b><i>${user.company}</i></li>
       <li class="list-group-item"><b>Website:</b><i>${user.blog}</i></li>
       <li class="list-group-item"><b>Location:</b><i>${user.location}</i></li>
       <li class="list-group-item"><b>Member:</b><i>${user.created_at}</i></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      <center>
      <h2><b><u> <i>_____________________Latest Report_________________</i></u></b> </h2></center><br><br>
      <div id="repos"></div>
     `);
      
 });
     });
});