// import { firebaseConfig } from '../firebase-config';
var firebaseConfig = {
    apiKey: "AIzaSyCjoFObfrlrNU96eiKUUIyGKYuC_nWzyC4",
    authDomain: "covidyodhawebsite.firebaseapp.com",
    projectId: "covidyodhawebsite",
    storageBucket: "covidyodhawebsite.appspot.com",
    messagingSenderId: "434959698791",
    appId: "1:434959698791:web:e0f9dd590c456744097dc2",
    measurementId: "G-JPN2FFJTK7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
console.log("huu");

function email() {
    var cuser = auth.currentUser;
    console.log(cuser);
    if (cuser != null) {
        console.log(cuser);
        var u_email = cuser.email;
        document.getElementById('uemail').innerHTML = u_email;
    }
}


// SignIN Function




function signIn() {
    console.log('hii');
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            console.log(user);

            window.location.assign("../AdminDashboard/admindashboard.html");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(email.value);
            console.log(errorCode);
            window.alert(errorMessage);

        })
    // var email = document.getElementById("email");
    // var password = document.getElementById("password");
    // const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    // promise.catch(e=>alert(e.message));
};

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
    window.location.assign("../../index.html");
};

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        document.getElementById('uemail').innerHTML = email;

        // alert("Active user "+email);

    } else {
        // alert("No Active user Found")
    };
});














let database = firebase.firestore();





function data() {
    const imageholder = document.getElementById('imageholder').value;
    const headingnews = document.getElementById('headingnews').value;
    const contentNews = document.getElementById('contentNews').value;
    const descriptionNews = document.getElementById('descriptionNews').value;



    // for(i=53;i>48;i--){

    database.collection('news').doc('5').get().
        then(function (doc) {
            // console.log(doc.data().image)
            // console.log(image.src);

            var imgnews = doc.data().image;
            var headnews = doc.data().heading;
            var contentnews = doc.data().content;
            var descriptionnews = doc.data().description;
            // console.log(imgnews);









            firebase.firestore().collection('news').doc('6').update({
                date: today,
                image: imgnews,
                heading: headnews,
                content: contentnews,
                description: descriptionnews
            })
            console.log(imgnews);
        })

    database.collection('news').doc('4').get().
        then(function (doc) {
            // console.log(doc.data().image)
            // console.log(image.src);

            var imgnews = doc.data().image;
            var headnews = doc.data().heading;
            var contentnews = doc.data().content;
            var descriptionnews = doc.data().description;
            // console.log(imgnews);






            firebase.firestore().collection('news').doc('5').update({
                date: today,
                image: imgnews,
                heading: headnews,
                content: contentnews,
                description: descriptionnews
            })
            console.log(imgnews);
        })
    database.collection('news').doc('3').get().
        then(function (doc) {
            // console.log(doc.data().image)
            // console.log(image.src);

            var imgnews = doc.data().image;
            var headnews = doc.data().heading;
            var contentnews = doc.data().content;
            var descriptionnews = doc.data().description;
            // console.log(imgnews);






            firebase.firestore().collection('news').doc('4').update({
                date: today,
                image: imgnews,
                heading: headnews,
                content: contentnews,
                description: descriptionnews
            })
            console.log(imgnews);
        })
    database.collection('news').doc('2').get().
        then(function (doc) {
            // console.log(doc.data().image)
            // console.log(image.src);

            var imgnews = doc.data().image;
            var headnews = doc.data().heading;
            var contentnews = doc.data().content;
            var descriptionnews = doc.data().description;
            // console.log(imgnews);






            firebase.firestore().collection('news').doc('3').update({
                date: today,
                image: imgnews,
                heading: headnews,
                content: contentnews,
                description: descriptionnews
            })
            console.log(imgnews);
        })

    database.collection('news').doc('1').get().
        then(function (doc) {
            // console.log(doc.data().image)
            // console.log(image.src);

            var imgnews = doc.data().image;
            var headnews = doc.data().heading;
            var contentnews = doc.data().content;
            var descriptionnews = doc.data().description;
            // console.log(imgnews);






            firebase.firestore().collection('news').doc('2').update({
                date: today,
                image: imgnews,
                heading: headnews,
                content: contentnews,
                description: descriptionnews
            })
            console.log(imgnews);
        })


    database.collection('news').doc('0').get().
        then(function (doc) {
            // console.log(doc.data().image)
            // console.log(image.src);

            var imgnews = doc.data().image;
            var headnews = doc.data().heading;
            var contentnews = doc.data().content;
            var descriptionnews = doc.data().description;
            // console.log(imgnews);






            firebase.firestore().collection('news').doc('1').update({
                date: today,
                image: imgnews,
                heading: headnews,
                content: contentnews,
                description: descriptionnews
            })
            console.log(imgnews);
        })




    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    firebase.firestore().collection('news').doc('0').set({
        date: today,
        image: imageholder,
        heading: headingnews,
        content: contentNews,
        description: descriptionNews
    })







    window.alert('Saved Successfully');

}

function clea() {
    imageholder.value = "";
    headingnews.value = "";
    contentNews.value = "";
    descriptionNews.value = "";
}





function getdata() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;


    // from news.html
    for (i = 49; i < 55; i++) {
        let date = document.getElementById('datenews' + String.fromCharCode(i));
        let image = document.getElementById('newsimg' + String.fromCharCode(i));
        let heading = document.getElementById('heading' + String.fromCharCode(i));
        let content = document.getElementById('newscontent' + String.fromCharCode(i));
        let news = document.getElementById('news' + String.fromCharCode(i));
        // console.log(news.href);


        database.collection('news').doc(String.fromCharCode(i)).get()
            .then(function (doc) {
                // console.log(doc.data().image)
                // console.log(image.src);
                // console.log(doc.data().description)
                if (doc.exists) {
                    date.innerHTML = doc.data().date;
                    image.src = doc.data().image;
                    heading.innerHTML = doc.data().heading;
                    content.innerHTML = doc.data().content;
                    news.href = doc.data().description;
                    // console.log(doc.data().date)

                }

            })
    }
}
getdata()



function uploadblog() {
    const ref = firebase.storage().ref();
    const file = document.getElementById("files").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);
            blogcontent(url)

        })
        .catch(console.error);
    window.alert("blogs saved")
}




function blogcontent(url) {
    var headingBlog = document.getElementById('headingBlog').value;
    var shortDesp = document.getElementById('shortDesp').value;
    var blogLink = document.getElementById('blogLink').value;




    // Alphanumeric characters
    const chars = '0123456789';
    let autoId = '';
    for (let i = 0; i < 100; i++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }



    console.log(autoId)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    firebase.firestore().collection('blogs').doc(autoId).set({
        date: today,
        image: url,
        headingBlog: headingBlog,
        shortDesp: shortDesp,
        blogLink: blogLink
    })
    console.log(headingBlog)


}
var size = 0;

// function addcard() {
//     database.collection('blogs').get().then((snapshot) => {
//         console.log(snapshot.docs)
//         for (var i = 0; i < snapshot.docs.length; i++) {



//             console.log(i)
//         }
//     });
// }




// document.getElementById('maindiv').innerHTML += "<div class='col-md-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='100'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='assets/img/blog/blog-4.png' class='img-fluid' alt=''></div><div class='flip-card-back'><h4>importance of sustainable food system during covid-19</h4><p>In light of the COVID 19 pandemic, food systems are at the crossroads of human well-being, economicdevelopment, and environmental state. Empty shelves in supermarkets of cities can be frightening.</p><div><a style='color: white; margin-top: 5%;' href='https://covidyodha.medium.com/importance-of-sustainable-food-systems-during-covid-19-2d7687c22eda' class='btn-read-more d-inline-flex align-items-center justify-content-center align-self-center'><span style='color: white;'>Read More</span><i class='bi bi-arrow-right'></i></a></div></div></div></div></div>"


// addcard()



// database.collection('blogs').get().
//     then(snapshot => {
//         console.log(snapshot.docs[0])
// console.log(doc.data().image)
// console.log(image.src);

// var imgblog = doc.data().image;
// var headblog = doc.data().headingBlog;
// var shortDesp = doc.data().shortDesp;
// var bloglink = doc.data().blogLink;
// document.getElementById('blogimage' + 0).src = imgblog;
// document.getElementById('blogheading' + 0).src = headblog;
// document.getElementById('blogpara' + 0).src = shortDesp;
// document.getElementById('bloglink' + 0).src = bloglink;

// });



var docref = database.collection('blogs').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        document.getElementById('maindiv').innerHTML += "<div class='col-md-4 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='100'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img id='blogimage" + doc.id + "' src=" + doc.data().image + " class='img-fluid' alt=''></div><div class='flip-card-back'><h4 id='blogheading" + doc.id + "'>" + doc.data().headingBlog + "</h4><p id='blogpara" + doc.id + "'>" + doc.data().shortDesp + "</p><div><a style='color: white; margin-top: 5%;' href=" + doc.data().blogLink + " id='bloglink" + doc.id + "' class='btn-read-more d-inline-flex align-items-center justify-content-center align-self-center'><span style='color: white;'>Read More</span><i class='bi bi-arrow-right'></i></a></div></div></div></div></div>"


        console.log(doc.id, '=>', doc.data())
        // var imgblog = doc.data().image;
        var headblog = doc.data().headingBlog;
        var shortDesp = doc.data().shortDesp;
        var bloglink = doc.data().blogLink;
        // document.getElementById('blogimage' + doc.id).src = imgblog;
        document.getElementById('blogheading' + doc.id).src = headblog;
        document.getElementById('blogpara' + doc.id).src = shortDesp;
        document.getElementById('bloglink' + doc.id).src = bloglink;
    })
})
















//changing data 

// const image = document.getElementById('imageholder');
// const headingnews = document.getElementById('headingnews');
// const contentNews = document.getElementById('contentNews');
// const descriptionNews = document.getElementById('descriptionNews');


// function data(){

//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0');
//   var yyyy = today.getFullYear();
// var hour = today.getHours();
// var min = today.getMinutes();
// var sec = today.getSeconds();

// var time = hour + '-' + min + '-' + sec;
// today = dd + '-' + mm + '-' + yyyy;
// console.log(time);

// const imageholder = document.getElementById('imageholder');
// const headingnews = document.getElementById('headingnews');
// const contentNews = document.getElementById('contentNews');
// const descriptionNews = document.getElementById('descriptionNews');


// console.log(image.value);
// console.log('123');




// var i;
// for(i=1; i<=6;i++){
// console.log(i);

// var db_em = firebase.database().ref('news/' + 5);

// db_em.on('value',(snapshot)=>{

// const edatas = snapshot.val();
// var content = edatas.content;
// var image = edatas.image;
// var description = edatas.description;
// var date = edatas.date;
// var heading = edatas.heading;
// console.log(heading);



// firebase.database().ref('news/' + (6)).set({
//   date : date,
//   image: image,
//   heading: heading,
//   content: content,
//   description: description,

//   });

//   console.log(heading);
// });
// var db_em = firebase.database().ref('news/' + 4);

// db_em.on('value',(snapshot)=>{

// const edatas = snapshot.val();
// var content = edatas.content;
// var image = edatas.image;
// var description = edatas.description;
// var date = edatas.date;
// var heading = edatas.heading;
// console.log(heading);



//     firebase.database().ref('news/' + (5)).set({
//       date : date,
//       image: image,
//       heading: heading,
//       content: content,
//       description: description,

//   });

//   console.log(heading);
// });
// }





//     firebase.database().ref('news/4').set({
//       date : today,
//       image: imageholder.value,
//       heading: headingnews.value,
//       content: contentNews.value,
//       description: descriptionNews.value,


//     });

//     window.alert('Saved Successfully');
//     imageholder.value="";
//     headingnews.value="";
//     contentNews.value="";
//     descriptionNews.value="";

//   };



//   function add(cardno,imageholder,descriptionNews,headingnews,contentNews,date){

//     document.getElementById('datenews'+ cardno).innerHTML=date;
//     document.getElementById('newsimg'+ cardno).src=imageholder;
//     document.getElementById('heading'+ cardno).innerHTML=headingnews;
//     document.getElementById('newscontent'+ cardno).innerHTML=contentNews;
//     document.getElementById('news'+ cardno).href=descriptionNews;

// }


// function goData(){
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// var hour = today.getHours();
// var min = today.getMinutes();
// var sec = today.getSeconds();

// var time = hour + '-' + min + '-' + sec;
// today = dd + '-' + mm + '-' + yyyy;
// console.log(time);

// firebase.database().ref('news/').once("value",function(snapshot){
//     snapshot.forEach(
//     function(childsnapshot){
//         let date = childsnapshot.val().date;
//         let contentNews = childsnapshot.val().content;
//         let descriptionNews = childsnapshot.val().description;
//         let headingnews = childsnapshot.val().heading;
//         let imageholder = childsnapshot.val().image;
//         let cardno=childsnapshot.key;
// console.log(cardno);

//         add(cardno,imageholder,descriptionNews,headingnews,contentNews,date);
//     }
//     );

// });
// }
// goData();

// function swapdata(){
//   // console.log('123');
//   var i;
//   for(i=4; i>=1;i--){
//     // console.log(i);

//     var db_em = firebase.database().ref('news/' + i);

//     db_em.on('value',(snapshot)=>{

//     const edatas = snapshot.val();
//     var content = edatas.content;
//     var image = edatas.image;
//     var description = edatas.description;
//     var date = edatas.date;
//     var heading = edatas.heading;
//     // console.log(heading);



//     firebase.database().ref('news/' + (i+1)).set({
//       date : date,
//       image: image,
//       heading: heading,
//       content: content,
//       description: description,

//   });

//   console.log(heading);
// });
//   }

// }