function c(i,j,k){
  console.log(this);
  console.log(arguments);
  console.log(i,j,k);
}

// c.call(1,2,3);


const user ={
  salute: '',
  greet: function (){
    this.salute = 'hello';
    console.log(this.salute);
    const setFrench =  (newS) => {
      this.salute = newS;
    }
    setFrench('Bonjour');
    console.log(this.salute);
  }
}

// user.greet();


foo = () => {
  console.log(this);
}

// foo.call('123');

const group = {
  title:'hi',
  stu: ['j' , 'k', 'l'],
  showContent: function(){
    this.stu.forEach((item)=>{
      console.log(this.title, ' ', item);
    })
  }
}

group.showContent();