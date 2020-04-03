<template>
  <div>
    <h2>案例练习</h2>
    <!-- 第一部分 -->
    <fieldset>
      <legend>指令综合小练习</legend>
      <div>
        <span>姓名：</span>
        <input type="text" placeholder="请输入姓名" v-model="newPerson.name">
      </div>
      <div>
        <span>年龄：</span>
        <input type="text" placeholder="请输入年龄" v-model="newPerson.age">
      </div>
      <div>
        <span>性别：</span>
        <select name="" id="" v-model="newPerson.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div>
        <span>手机：</span>
        <input type="text" placeholder="请输入手机号" v-model="newPerson.phone">
      </div>
      <button @click="createPerson">创建新用户</button>
    </fieldset>

    <!-- 第二部分 -->
    <table>
      <thead>
        <tr>
          <td>序号</td>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>手机号</td>
          <td>删除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in persons" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.age}}</td>
          <td>{{item.phone}}</td>
          <td>
            <button type="button" @click="deletePerson(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      persons: [
        { name: '张三', age: 18, sex: '男', phone: '12345678910' },
        { name: '李四', age: 18, sex: '男', phone: '12345678910' },
        { name: '王五', age: 24, sex: '男', phone: '12345678910' },
        { name: '赵六', age: 18, sex: '男', phone: '12345678910' },
        { name: '张三', age: 19, sex: '男', phone: '12345678910' },
        { name: '李四', age: 20, sex: '男', phone: '12345678910' },
        { name: '王五', age: 30, sex: '男', phone: '12345678910' },
        { name: '赵六', age: 19, sex: '男', phone: '12345678910' }
      ],
      newPerson: { name: '', age: '0', sex: '男', phone: '' }
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    // 创建新用户
    createPerson () {
      // 1.先判断里面是不是有内容
      var { name, age, phone } = this.newPerson
      if (name === '') {
        alert('姓名不能为空')
        return
      }
      if (age <= 0) {
        alert('年龄不正确')
        return
      }
      if (phone === '') {
        alert('电话不能为空')
        return
      }
      this.persons.unshift(this.newPerson)

      // 3.清空数据
      this.newPerson = { name: '', age: '0', sex: '男', phone: '' }
    },
    // 删除
    deletePerson (index) {
      this.persons.splice(index, 1)
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
div {
  margin: 20px;
}
fieldset {
  width: 400px;
  margin: 0 auto;
}
table {
  width: 400px;
  margin: 20px auto;
  background-color: #ccc;
}
td {
  height: 40px;
}
tr,
th,
td {
  border: 1px solid #fff;
}
</style>
