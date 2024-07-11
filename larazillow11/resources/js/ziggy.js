const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"listing.index":{"uri":"listing","methods":["GET","HEAD"]},"listing.create":{"uri":"listing\/create","methods":["GET","HEAD"]},"listing.store":{"uri":"listing","methods":["POST"]},"listing.show":{"uri":"listing\/{listing}","methods":["GET","HEAD"],"parameters":["listing"]},"listing.edit":{"uri":"listing\/{listing}\/edit","methods":["GET","HEAD"],"parameters":["listing"]},"listing.update":{"uri":"listing\/{listing}","methods":["PUT","PATCH"],"parameters":["listing"]},"listing.destroy":{"uri":"listing\/{listing}","methods":["DELETE"],"parameters":["listing"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
