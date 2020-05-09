let money = 0;
let moneyh1 = document.getElementsByTagName("h1");
moneyh1[0].innerHTML = "money:" + money;
let clicker = document.getElementsByClassName("clicker");
clicker[0].addEventListener("click",function(){
	money = money + 1 + levelupgrade;
	moneyh1[0].innerHTML = "money:" + money;

});
let upgradecost = 25;
let levelupgrade = 0;
let upgradebutton = document.getElementsByClassName("upgrade");
upgradebutton[0].innerHTML = "upgrade:" + upgradecost;
upgradebutton[0].addEventListener("click",function(){
	if (money >= upgradecost) {
		money = money - upgradecost;
		levelupgrade = levelupgrade + 1;
		upgradecost = parseInt(upgradecost * 1.35);
		upgradebutton[0].innerHTML = "upgrade" + upgradecost;
		moneyh1[0].innerHTML = "money:" + money;
	}
});