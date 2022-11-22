const {getChildren} = require("vuepress-sidebar-atuo");
module.exports = {
    '/guide/': require('../guide/sidebar'),//学习路线

    // '/java/java-beginner/': require('../java/java-beginner/sidebar'), //java基础
    // '/java/java-intermediate/': require('../java/java-intermediate/sidebar'), //java基础进阶
    // '/java/java-senior/': require('../java/java-senior/sidebar'), //java进阶
    // '/java/java-web/': require('../java/java-web/sidebar'), //javaWeb
    // '/java/frame/': require('../java/frame/sidebar'), //java框架
    // '/java/microservice/': require('../java/microservice/sidebar'), //分布式/微服务/并发框架
    // '/java/projects/': require('../java/projects/sidebar'), //Java项目实战
    // '/java/interview/': require('../java/projects/sidebar'), //Java面试题
    // '/java/source-code/': require('../java/projects/sidebar'), //Java源码系列
    //
    // '/bigdata/hadoop/': require('../bigdata/hadoop/sidebar'), //大数据-hadoop
    // '/bigdata/hive/': require('../bigdata/hive/sidebar'), //大数据-hive

    '/php/php-base/': require('../php/sidebar'), //PHP基础
}
