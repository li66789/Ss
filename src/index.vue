<template>
  <div id="app">
    <el-row></el-row>
    <el-row :gutter="15">
      <el-col :span="6" :offset="1">
        <el-select @change='handleChange1' v-model="value1" placeholder="请选择数字">
        <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
        </el-select>
     </el-col>
    <el-col :span="6">
      <el-select @change='handleChange2' v-model="value2" placeholder="请选择符号">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
  <el-col :span="6">
    <el-select @change='handleChange3' v-model="value3" placeholder="请选择数字">
      <el-option
        v-for="item in options3"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-col>
  <el-col :span="3">
     <el-button type="primary" @click.native="count">执行</el-button>
  </el-col>
</el-row>
    <el-row></el-row>
<el-row >
  <el-col :span="12" :offset="5">
  <el-tag id="result"  > 执行结果:
    <span id="number" >{{result}}</span>
  </el-tag>

  </el-col>
</el-row>
    <el-row>
      <el-button  @click="printTree"> printTree
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  created(){
    for(let i=0;i<=1024;i++){
      if(i%2==0){
        var a = {value:i,label:i}
        this.options1.push(a)
      }
    }
    for(let j=1;j<=100;j++){
      var b = {value:j,label:j}
      this.options3.push(b)
    }
  },
  data() {
    return {
      result:'',
      options1:[],
      options3:[],
      options2: [{
        value: '+',
        label: '+'
      }, {
        value: '-',
        label: '-'
      }, {
        value: '*',
        label: '*'
      }, {
        value: '/',
        label: '/'
      }],
      value1: '',
      value2: '',
      value3: '',
      selectVal1:'',
      selectVal2:'',
      selectVal3:'',
    }
  },
  methods:{
    handleChange1(data) {
      //如果上面:value赋的是对象，则可以将返回的对象赋予其他变量，这里的data是选中的对象，那么data.label则是reasonTypes中的label值，如果下拉中选中美国，那么this.selectVal 值为“美国”
      this.selectVal1= data
      console.log("this.selectVal1: "+data)
    },
    handleChange2(data) {
      //如果上面:value赋的是对象，则可以将返回的对象赋予其他变量，这里的data是选中的对象，那么data.label则是reasonTypes中的label值，如果下拉中选中美国，那么this.selectVal 值为“美国”
      this.selectVal2= data
      console.log("this.selectVal2: "+data)
    },
    handleChange3(data) {
      //如果上面:value赋的是对象，则可以将返回的对象赋予其他变量，这里的data是选中的对象，那么data.label则是reasonTypes中的label值，如果下拉中选中美国，那么this.selectVal 值为“美国”
      this.selectVal3= data
      console.log("this.selectVal3: "+data)
    },
    count(){
      console.log("我来过")
      console.log("this.value1: "+this.selectVal1)
      if(this.selectVal2=='+'){
        this.result = this.selectVal1 + this.selectVal3
        console.log("result: "+this.result)
      }
      if(this.selectVal2=='-'){
        this.result = this.selectVal1 - this.selectVal3
        console.log("result: "+this.result)
      }
      if(this.selectVal2=='*'){
        this.result = this.selectVal1 * this.selectVal3
        console.log("result: "+this.result)
      }
      if(this.selectVal2=='/'){
        this.result = this.selectVal1 / this.selectVal3
        console.log("result: "+this.result)
      }
    },
    BinaryTree(){
          var Node = function(key) {
            this.key = key;
            this.left = null;
            this.right = null;
          }
          var root = null;
          var insertNode = function(nodes,length,thisNode,i){

            if((i)*2<length){
              var leftchild = new Node(nodes[(i)*2-1]);
              thisNode.left = leftchild;
              insertNode(nodes,length,leftchild,(i)*2)

            }
            if((i)*2+1<length){
              var rightchild =new Node(nodes[(i)*2]);
              thisNode.right = rightchild;
              insertNode(nodes,length,rightchild,(i)*2+1)
            }
          }

          this.getRoot = function() {
            return root;
          }

          this.insert = function(nodes) {
            length = nodes.length+1;

            var thisNode = new Node(nodes[0]);
            root = thisNode;

            insertNode(nodes,length,thisNode,1)
          }
        },


    printTree(){
      let nodes = ['A','B','D','C','E','F','G',null,null,'H','I',null,null,'J']
      var tree = new this.BinaryTree();
      tree.insert(nodes);
      // for(let i=0;i<nodes.length;i++){
      //   tree.insert(nodes[i]);
      // };
      let root = tree.getRoot();
      let result = [];
      if (!root) return result;
      let next = [];
      next.push(root);
      while (next.length){
        let length = next.length;
        result.push([]);
        console.log(1)
        for (let i = 0; i < length; i++){
          // console.log(i)
          let node = next.shift();
          if(node.key!=null){
            result[result.length - 1].push(node.key);}
          if(node.left){next.push(node.left);}
          if(node.right){ next.push(node.right);}
        }
        // console.log(result)
      }
      console.log(result)

    },
}
}
</script>

<style>
#app{
  height: 330px;
  width: 910px;
  left: 271px;
  top: 174px;
  border-radius: 0px;
  background-color: #F2F2F2;
  position: absolute;
}
#result{
  height: 150px;
  width: 457px;
  padding:40px;
  border-radius: 12px;
  font-size: 20px;
}
#number{
  font-size: 46px;
  font-weight: bold;

}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
