module.exports = function install(){
var myDevice = {
    device: {
        name: 'decodeur',
        identifier: 'IPdécodeur',
        protocol: 'gladys-livebox',
        service: 'gladys-livebox'
    },
    types: [
        {
            identifier: "power",
            type: 'binary',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "channel",
            type:'channel',
            unit: 'channel',
            min: 0,
            max: 999,
            sensor: false
        },
        {
            identifier: "ok",
            type: 'ok',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "volup",
            type: 'volup',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "voldown",
            type: 'voldown',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        },
        {
            identifier: "mute",
            type: 'mute',
            unit: 'binary',
            min: 0,
            max: 1,
            sensor: false
        }
    ]   
};
gladys.device.create(myDevice)
      .then(function(device){
          console.log("Attention, pensez à préciser dans les devices l'ip de votre décodeur")
         // device created ! 
      })
      .catch(function(err){
          // something bad happened ! :/
                    console.log(err)

      });
}
