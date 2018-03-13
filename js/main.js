function User(element){
    var self = this;
    var results = document.getElementById('results');
    var fields;
    var passChek = [];//Password check
    


    this.email = function(){
        var eMail;
        eMail = element[0].value;

        test.innerHTML = eMail;
    };
    
    this.pass = function(){
        var passM;
        if(element[1].value === element[2].value){
            console.log('match');
            passM = element[2].value;
            test.innerHTML = passM;
        }else{
            console.log('no match');
        }
    };

    
    this.user_lang = function(){        
        var pattern = element[3].value;
        var regEx = new RegExp(pattern + '\\w+', 'g');        
        var matcher = results.textContent.match(regEx);
        if(element[3].value === ''){
            matcher[0] = ''; 
        }else{
            element[3].value = matcher[0];
        }
        console.log(matcher[0]);            
    };


(function(){
    /* Take stuff */
        for (var i = 0; i < element.length; i++) {
            fields = element[i].getAttribute('data-input');
    /*  incorect args       element[i].addEventListener("input", {handleEvent: self[fields], input: self}, false);
     */     element[i].addEventListener("keyup", self[fields], false);
        }
})();
    
}


window.onload = function(){
    console.log('Done');
    new User(registration);
    var test = document.getElementById('test');
    new BinaryIp(IpFields);
    console.log('obj start');
};




function BinaryIp(binInput){

    var binFields;
    var func = this;
    var IpAddress = [];
    var digit;
    var IpDiv = document.getElementById('alertIp');

    this.first = function(){
        var _first_ = binInput[0].value;
        console.log(_first_);
        digit = parseInt(_first_, 2);
        IpAddress[0] = digit;
        console.log(IpAddress)
    };


    this.second = function(){
        var _second_ = binInput[1].value;
        console.log(_second_);
        digit = parseInt(_second_, 2);
        IpAddress[1] = digit;
        console.log(IpAddress)
    };


    this.third = function(){
        var _third_ = binInput[2].value;
        console.log(_third_);
        digit = parseInt(_third_, 2);
        IpAddress[2] = digit;
        console.log(IpAddress)
    };


    this.fourth = function(){
        var _fourth_ = binInput[3].value;
        console.log(_fourth_);
        digit = parseInt(_fourth_, 2);
        IpAddress[3] = digit;
        console.log(IpAddress)
        this.IpCheck();
    };

      this.IpCheck = function(){
          console.log(Number.isInteger(IpAddress[0]));

        for(var n = 0; n < IpAddress.length; n++){
            if(Number.isInteger(IpAddress[n])){
                IpDiv.children[1].textContent = IpAddress;
                IpDiv.classList.toggle('d-none');
            }
        }
    };
    

    (function(){
        for(var k = 0; k < binInput.length; k++){
            binInput[k].addEventListener("keyup", function(event, element){
                if(event.key == 0 || event.key == 1 || event.key == 'Backspace'){
                    for(var h = 0; h < binInput.length; h++){
                        binFields = binInput[h].getAttribute('data-binary');
                        func[binFields]();  
                    }                                  
                }else{
                    this.value = '';
                }
            }, false); //end addEventListener
        }
    })();
}
