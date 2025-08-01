// 在页面加载完成后调用 danMu 函数
document.addEventListener('DOMContentLoaded', function() {
    // 检查 window.danMu 是否存在
    if (typeof window.danMu === 'function') {
        // 调用 danMu 函数，传入一个返回弹幕数据的函数
        window.danMu(() => {
            return [
                '举杯邀明月，对影成三人',
                '会当凌绝顶，一览众山小',
                '云想衣裳花想容，春风拂槛露华浓',
                '二十四桥明月夜，玉人何处教吹箫？',
                '月落乌啼霜满天，江枫渔火对愁眠。',
                '两岸猿声啼不住，轻舟已过万重山。',
                '泠泠七弦上，静听松风寒。',
                '举杯邀明月，对影成三人',
                '会当凌绝顶，一览众山小',
                '云想衣裳花想容，春风拂槛露华浓',
                '二十四桥明月夜，玉人何处教吹箫？',
                '月落乌啼霜满天，江枫渔火对愁眠。',
                '两岸猿声啼不住，轻舟已过万重山。',
                '泠泠七弦上，静听松风寒。'
            ].map((text, id) => ({ id, text }))
        });
    } else {
        console.error('弹幕功能未正确加载，window.danMu 不存在');
    }
});