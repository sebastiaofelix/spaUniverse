import { Pages } from './class.js'

const pages = new Pages()
pages.add("/", "/pages/home.html")
pages.add('/oUniverso', '/pages/universo.html')
pages.add('/exploracao', '/pages/exploracao.html')
pages.add(404, '/pages/404.html')


pages.handle()

window.onpopstate = () => pages.handle()
window.route = () => pages.route()
