import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

contract_Address="0x3641b0f25fcffadfdd50b295d29668386f7171b6";

ABIArray=[{"constant":true,"inputs":[],"name":"get_address","outputs":[{"name":"","type":"address[10]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"reward","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"add","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"user","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"i","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

data="60606040526000601555341561001157fe5b5b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6103a5806100646000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630131222f14610067578063228cb733146100c3578063446bffba146100d55780634f8632ba146100f9578063e5aa3d581461014b575bfe5b341561006f57fe5b610077610171565b6040518082600a602002808383600083146100b1575b8051825260208311156100b15760208201915060208101905060208303925061008d565b50505090500191505060405180910390f35b34156100cb57fe5b6100d36101f3565b005b34156100dd57fe5b6100f7600480803560001916906020019091905050610287565b005b341561010157fe5b61010961030e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561015357fe5b61015b610334565b6040518082815260200191505060405180910390f35b61017961033a565b600b600a806020026040519081016040528092919082600a80156101e8576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161019e575b505050505090505b90565b6000600090505b600381101561028357600b81600a8110151561021257fe5b0160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc670de0b6b3a76400009081150290604051809050600060405180830381858888f19350505050505b80806001019150506101fa565b5b50565b806001601554600a8110151561029957fe5b0160005b50816000191690555033600b601554600a811015156102b857fe5b0160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506015600081548092919060010191905055505b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60155481565b61014060405190810160405280600a905b600073ffffffffffffffffffffffffffffffffffffffff1681526020019060019003908161034b57905050905600a165627a7a723058204f839b9fa2a269c6af5bea3b22662e48d7121f37e443251ca584bef8e452fba90029";

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    var template =Template.instance();
    mycontract=web3.eth.contract(ABIArray).at(contract_Address);

    console.log(mycontract);
    var defaultAccount = web3.eth.defaultAccount;
    
     
     mycontract.get_address(function(err,res){
      
      console.log("Address");
     
     for(var i=0;i<10;i++)
     {
        console.log(res[i]);
     }
      TemplateVar.set(template, "counter1", res);

    })
      

      mycontract.i(function(err,res){
        console.log("i "+res);
      TemplateVar.set(template, "counter2", res);

    })
 
 

  },
}); 