 //单独设置state到map的映射
import { mapState } from 'vuex'
const propsState = {
    computed:mapState({
       // 箭头函数可使代码更简练
       count: state => state.count,
        // 传字符串参数 'count' 等同于 `state => state.count` 别名
        countAlias: 'count',

        countPlusLocalState (state) {
            return state.count + 10
        }
    })
}
export default  propsState;