'use strict';

var hapi = require('hapi');
var path = require('path');
var hoek = require('hoek');
var fs = require('fs');
var req = require('request');
var contents = fs.readFileSync("server.config.json");
var serverConfig = JSON.parse(contents);
var APP_URL_SET = ''
var APP_ADMIN_URL = ''

console.log("Server Config: \n" + JSON.stringify(serverConfig));
console.log("HTTP Host: " +  serverConfig.http_host);
console.log("HTTP Port: " +  serverConfig.http_listen_port);

const server = new hapi.Server();

server.connection({
    host: serverConfig.http_host,
    port: serverConfig.http_listen_port
});

var modules = [require('vision'), require('inert')];

APP_URL_SET = serverConfig.data_api_idm_uri
APP_ADMIN_URL = serverConfig.data_api_admin_uri

server.register(modules, (err) => {
    hoek.assert(!err, err);
    
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
    });
    
	server.route({
        method: 'GET',
        path: '/cloud/{filename}',
        handler: function (request, reply) {
                                             //var uri = serverConfig.data_api_idm_uri;
            var data_api_url_param = serverConfig.data_api_url_param;
            var data_api_url_noparam = serverConfig.data_api_url_noparam;
            var data_api_ui = serverConfig.data_api_cloud_uri;
                                             console.log("part 1 "+ request.params.filename)
            reply.view("cloud/views/"+request.params.filename, { url_param: data_api_url_param, url_noparam: data_api_url_noparam, api_ui: data_api_ui});
        }
    });
               
               
    server.route({
        method: 'GET',
        path: '/cloud/{filename*2}',
        handler: function (request, reply) {
                                             var uri = serverConfig.data_api_idm_uri;
            const part = request.params.filename.split('/');
                                             const id= part[1]
                                             console.log("part 0 "+part[0])
            reply.view("cloud/views/"+part[0], { data_uri: uri,ids:id});
           
                                             
        }
    });
               
               server.route({
        method: 'GET',
        path: '/cloud/public/{param*}',
        handler: {
            directory: {
                path: "cloud/public"
            }
        }
    });
    
                   server.route({
        method: 'GET',
        path: '/cloud/discover_update.html/public/{param*}',
        handler: {
            directory: {
                path: "cloud/public"
            }
        }
    }); 
               
                server.route({
        method: 'GET',
        path: '/cloud/dashboard_update.html/public/{param*}',
        handler: {
            directory: {
                path: "cloud/public"
            }
        }
    }); 
    
    server.route({
        method: 'GET',
        path: '/cloud/header/{filename}',
        handler: {
            directory: {
                path: "cloud/views/header"
            }
        }
    });

    
      server.route({
        method: 'GET',
        path: '/cognitive/',
        handler: function (request, reply) {
			var uri = serverConfig.data_api_idm_uri;
            var file = new String(request.params.filename);            
            reply.view("views/index.html", {data_uri: APP_URL_SET, data_api_admin_uri: APP_ADMIN_URL});  
          
        }
    }); 
   
   
     server.route({
        method: 'GET',
        path: '/cognitive/{param*}',
        config: {
                security: { 
                    xframe: true
                }
        },
        handler: function (request, reply) {
            reply.view("views/index.html", {data_uri: serverConfig.data_api_idm_uri, data_api_admin_uri: APP_ADMIN_URL});  
        }
      }); 
 
    
    // *** Cognitive Routes - Start ***
    /*    server.route({
        method: 'GET',
        path: '/cognitive/{filename}',
        handler: function (request, reply) {
			var uri = serverConfig.data_api_idm_uri;
            var file = new String(request.params.filename);            
            
            if((file == "index.html")){
                reply.view("views/" + file, {data_uri: uri});
            }else{
                if(file.indexOf(".") > -1){ 
                    reply.file("views/" + file);
                }else{
                    reply.view("views/" + file, {data_uri: uri});
                } 
            }
        }
    }); */

    
    server.route({
        method: 'GET',
        path: '/cognitive/public/{param*}',
        handler: {
            directory: {
                path: "public"
            }
        }
    });
     server.route({
        method: 'GET',
        path: '/cognitive/views/{param*}',
        handler: {
            directory: {
                path: "views"
            }
        }
    });
    
    server.route({
        method: 'GET',
        path: '/cognitive/header/{filename}',
        handler: {
            directory: {
                path: "views/header"
            }
        }
    });
	
	

    // *** Cognitive Routes - End ***



    // *** IDM Routes - Starts ***


    
      server.route({
        method: 'GET',
        path: '/idm/',
        handler: function (request, reply) {
			var uri = serverConfig.data_api_idm_uri;
            var file = new String(request.params.filename);            
            reply.view("views/index1.html", {data_uri: APP_URL_SET, data_api_admin_uri: APP_ADMIN_URL});  
          
        }
    }); 
   
     server.route({
        method: 'GET',
        path: '/idm/{param*}',
        handler: function (request, reply) {
            reply.view("views/index1.html", {data_uri: serverConfig.data_api_idm_uri, data_api_admin_uri: APP_ADMIN_URL});  
        }
      }); 

    
    server.route({
        method: 'GET',
        path: '/idm/public/{param*}',
        handler: {
            directory: {
                path: "public"
            }
        }
    });
     server.route({
        method: 'GET',
        path: '/idm/views/{param*}',
        handler: {
            directory: {
                path: "views"
            }
        }
    });
    
	 
    
    server.route({
        method: 'GET',
        path: '/idm/header/{filename}',
        handler: {
            directory: {
                path: "views/header"
            }
        }
    });
	
	

    // *** IDM Routes - End ***



    // *** ICP Routes - Starts ***


    
      server.route({
        method: 'GET',
        path: '/icp/',
        handler: function (request, reply) {
			var uri = serverConfig.data_api_idm_uri;
            var file = new String(request.params.filename);            
            reply.view("views/index_icp.html", {data_uri: APP_URL_SET, data_api_admin_uri: APP_ADMIN_URL});  
          
        }
    }); 
   
     server.route({
        method: 'GET',
        path: '/icp/{param*}',
        handler: function (request, reply) {
            reply.view("views/index_icp.html", {data_uri: serverConfig.data_api_idm_uri, data_api_admin_uri: APP_ADMIN_URL});  
        }
      }); 

    
    server.route({
        method: 'GET',
        path: '/icp/public/{param*}',
        handler: {
            directory: {
                path: "public"
            }
        }
    });
     server.route({
        method: 'GET',
        path: '/icp/views/{param*}',
        handler: {
            directory: {
                path: "views"
            }
        }
    });
    
	 
    
    server.route({
        method: 'GET',
        path: '/icp/header/{filename}',
        handler: {
            directory: {
                path: "views/header"
            }
        }
    });
	
	

    // *** ICP Routes - End ***





    server.start(function(){
        console.log('Server started at Port ' + serverConfig.http_listen_port);
    });    

});



