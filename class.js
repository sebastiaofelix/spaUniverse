export class Pages {
    routes = {}

    add(name, page){
        this.routes[name] = page
    }    

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()

        this.changeBackgroundImg()

    }

    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#page').innerHTML = html
        })
    }
    
    changeBackgroundImg(){
        const { pathname } = window.location;
        const { body } = document;
        
        switch (pathname) {
            case '/exploracao':
              body.className = 'explore';
              break;
      
            case '/oUniverso':
              body.className = 'universo';
              break;
      
            default:
              body.className = '';
              break;

        
            }
        }

}