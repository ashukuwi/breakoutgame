var numbers = [681, 523, 587, 338, 294, 1234, 1235, 1236, 102];

var weirdoKid = numbers.length;
var MiNiMuM = numbers[0];
var FindSmallestNumber = function() {
     for (i=1;i<=weirdoKid;i++) {
          if (MiNiMuM > numbers[i]) {
              MiNiMuM = numbers[i];
              var SmallestNumber__INDEX = i
              
          }
        }
        console.log(SmallestNumber__INDEX);
}
FindSmallestNumber();
console.log(MiNiMuM);


