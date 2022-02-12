var serverName = "http://dietolog.bombur.ru";
var isSend = false;
function FormSend() {
    if(isSend){
        
        alert('Ваша заявка уже отправлена!');
        return;
        
    }
    var email = $('#email').val();
            // alert(email);
     if (email.length < 4) {
       alert('Похоже email не правильный...');
        return false;
    }
    $.ajax({type: 'POST', data: 'email=' + email,
        url: serverName + '?act=send',
        success: function (data) {
            alert('Ваша заявка отправлена! Скоро наш менеджер ответит Вам');
            isSend = true;
            console.log(data);
            try
            {
                var json = JSON.parse(data);
                
            } catch (e) {
                console.log('Ошибка JSON');
            }
        },
        error: function (e) {
           alert('Ощибка. Видимо интернета нет');
        }
    });
}
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function testInternet(win, fail) {
    $.get("https://www.google.com/blank.html").done(win).fail(fail);
}