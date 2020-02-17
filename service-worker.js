/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a059126aa2bb20b02fffb6c23bce0af9"
  },
  {
    "url": "assets/css/0.styles.0a04ceb6.css",
    "revision": "e300aa740115a41244d1de57e4bffd9a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.27a69910.js",
    "revision": "0abd675f69e7eb86301037f383c1df54"
  },
  {
    "url": "assets/js/11.9a90a5e0.js",
    "revision": "fb4340d8a36ac9c66c78aca118a50bf8"
  },
  {
    "url": "assets/js/12.82ee8f23.js",
    "revision": "7a5988f12bb15f85e2ba055eb6c47de4"
  },
  {
    "url": "assets/js/13.01fa60c7.js",
    "revision": "f5147545153956d479d8df31059f13eb"
  },
  {
    "url": "assets/js/14.289ce03a.js",
    "revision": "d81a9f57f968f3e4fbb070459c8768ce"
  },
  {
    "url": "assets/js/15.20146332.js",
    "revision": "4447249ee88dc946029dff9e854549ae"
  },
  {
    "url": "assets/js/16.31002576.js",
    "revision": "622aa099f48218b139af768dca24e96f"
  },
  {
    "url": "assets/js/17.91db155d.js",
    "revision": "72e5472d1fe1182017b299026a5bd10a"
  },
  {
    "url": "assets/js/18.beb24a84.js",
    "revision": "31b691cc9c2d773034c27f51abe1d84f"
  },
  {
    "url": "assets/js/19.9b63c8bd.js",
    "revision": "ed37fdbf9c8540e6d6d8163692cfa04c"
  },
  {
    "url": "assets/js/20.7b3dd7ca.js",
    "revision": "cdf75839e8ad25be6f48344f7bc4177d"
  },
  {
    "url": "assets/js/21.32da2e20.js",
    "revision": "bd136733cb615c8e1c4aea1b3c8a1b66"
  },
  {
    "url": "assets/js/22.e98e166c.js",
    "revision": "e26d2fa90a02af29e88bbf49c9a5baf7"
  },
  {
    "url": "assets/js/23.2de495ed.js",
    "revision": "4ea0792a01908a1d28a1818877cbcf9c"
  },
  {
    "url": "assets/js/24.934d13fa.js",
    "revision": "5510fde66fe25d381e81d3d9173f7be5"
  },
  {
    "url": "assets/js/25.d8a9ef4b.js",
    "revision": "28c456d082ebec787d237527d93e16f0"
  },
  {
    "url": "assets/js/26.3e60b6e9.js",
    "revision": "40cd4b89577eef887bc9767014e5465b"
  },
  {
    "url": "assets/js/27.03a4cf85.js",
    "revision": "433ea8d0122b5cae9270823d2a3c9a81"
  },
  {
    "url": "assets/js/28.85c4983b.js",
    "revision": "62a6d7e47fc0a0066b682d271806a5df"
  },
  {
    "url": "assets/js/29.cfb40647.js",
    "revision": "8029ddeff76516debae23944dc195ec2"
  },
  {
    "url": "assets/js/30.b4406b0c.js",
    "revision": "1e4c79b95936d93b81686cb03be1b157"
  },
  {
    "url": "assets/js/31.721e5fce.js",
    "revision": "0c72fff5facb2681addb599b2d60c6ad"
  },
  {
    "url": "assets/js/32.61d9d888.js",
    "revision": "a6c7a87417fbf522e40e635074a14231"
  },
  {
    "url": "assets/js/33.2e2c17a0.js",
    "revision": "ee5f60b6813b117aafaa603c280ff9ff"
  },
  {
    "url": "assets/js/34.a0f94a57.js",
    "revision": "7028225d45721a4c5121913cea7e30f4"
  },
  {
    "url": "assets/js/35.609e175d.js",
    "revision": "0ce5d643420b9869f5a63313177532e4"
  },
  {
    "url": "assets/js/36.650baca2.js",
    "revision": "27691d44639d44e2c756b4ce3802a145"
  },
  {
    "url": "assets/js/37.59188234.js",
    "revision": "8456696650b004c2897c2a300c674432"
  },
  {
    "url": "assets/js/38.c3e47159.js",
    "revision": "ae4a13a1c038f3d15680ac1d86698bb8"
  },
  {
    "url": "assets/js/39.f7622bcc.js",
    "revision": "a3a16baffee8144864a108b1ac78cb81"
  },
  {
    "url": "assets/js/4.712970d0.js",
    "revision": "ef15043c38011b3c5b8daa9db9c336cf"
  },
  {
    "url": "assets/js/40.bf0b8425.js",
    "revision": "7425ca0b1818fd5619733e9e40d19e09"
  },
  {
    "url": "assets/js/41.f86852ed.js",
    "revision": "f353ceb3abe74547c59b703bf3f9d96c"
  },
  {
    "url": "assets/js/42.058e48bd.js",
    "revision": "cc94be4c945db6d3dd6b41cb4382adc9"
  },
  {
    "url": "assets/js/43.ecce35ee.js",
    "revision": "f301fe7497e0e54e3cfa69975c5ad4c4"
  },
  {
    "url": "assets/js/44.52f28acf.js",
    "revision": "b7fbeb8592dca22e43dc587e699b0530"
  },
  {
    "url": "assets/js/45.20f4f377.js",
    "revision": "96df9d86f00a4469d07515deec433eff"
  },
  {
    "url": "assets/js/46.0a0260b9.js",
    "revision": "8c596c9dd2bad640ef78ea7c5a39e946"
  },
  {
    "url": "assets/js/47.eb304074.js",
    "revision": "38d7437debb76bd67c59b68fcdc25802"
  },
  {
    "url": "assets/js/48.4b44c17f.js",
    "revision": "82cff7d856726d33310def9bffa13635"
  },
  {
    "url": "assets/js/49.7eb565e9.js",
    "revision": "390c75c69fa6565cd7e644a5f99e4d7f"
  },
  {
    "url": "assets/js/5.a5e63d96.js",
    "revision": "5608590c37c0eaa106ab7f8cc0c9fa7e"
  },
  {
    "url": "assets/js/50.8109a7ae.js",
    "revision": "5cb15032b61c48a8951a2608f7bc5563"
  },
  {
    "url": "assets/js/51.38b085ba.js",
    "revision": "0a5ce345d4f5566af58ace9bbd186bc0"
  },
  {
    "url": "assets/js/52.00ce2cbc.js",
    "revision": "968a04fc53e9c166a88573672993b9e7"
  },
  {
    "url": "assets/js/53.d6d7f478.js",
    "revision": "3591fcc3911b68df180f4799858bd8c4"
  },
  {
    "url": "assets/js/54.dfdb8d1e.js",
    "revision": "2a2d89c97eb688532937efcdef29bcaa"
  },
  {
    "url": "assets/js/55.1826944b.js",
    "revision": "0d795c3b07a428975e93c75801d00a63"
  },
  {
    "url": "assets/js/56.66dbda5d.js",
    "revision": "f1be500b43d06fd278f48159f92f981f"
  },
  {
    "url": "assets/js/57.40473993.js",
    "revision": "8bc0ac7f8329957f1aa42dc3b2d3fe59"
  },
  {
    "url": "assets/js/58.22b1ebc5.js",
    "revision": "8113c2d999b46078fccb49ceca52a388"
  },
  {
    "url": "assets/js/59.58783d5e.js",
    "revision": "873c4dea59b386a870ef580526bd9991"
  },
  {
    "url": "assets/js/6.d667bc4d.js",
    "revision": "e0496e4d9ec4d2a00d9bea7f77628c04"
  },
  {
    "url": "assets/js/60.c674f4b5.js",
    "revision": "ced7ae2f9e556e83546a202735ed842e"
  },
  {
    "url": "assets/js/61.b6341bd9.js",
    "revision": "3705994d38957c56027977e495a56f05"
  },
  {
    "url": "assets/js/62.89e2b730.js",
    "revision": "128da7fef5b475a43bbc479e5a4dc082"
  },
  {
    "url": "assets/js/63.0e1450bd.js",
    "revision": "825ffb83fc245151a9fedb679bb57cbb"
  },
  {
    "url": "assets/js/64.c2b3eaf7.js",
    "revision": "19f6eaa5b34860b550127d6c988df71b"
  },
  {
    "url": "assets/js/65.4faaada8.js",
    "revision": "b8d3ac3283ba583a0af992c76e791085"
  },
  {
    "url": "assets/js/66.4c312605.js",
    "revision": "0fb5dba94886d407fb0de2d224c3b11f"
  },
  {
    "url": "assets/js/67.bf8d7dc4.js",
    "revision": "fb09eb4dc94e3e000728da879a36c752"
  },
  {
    "url": "assets/js/68.9e1d5c1a.js",
    "revision": "9d880dccbc067b4e0a93cc9be0d0c6cc"
  },
  {
    "url": "assets/js/69.717b63a7.js",
    "revision": "d5df4e359cc10e2a6b5d1da2102db912"
  },
  {
    "url": "assets/js/7.49d24c76.js",
    "revision": "dbce73d1ee9573d3b349f59cb0d06c1a"
  },
  {
    "url": "assets/js/8.319b7672.js",
    "revision": "4ca2ed8dcbd2948d0118c1704080f261"
  },
  {
    "url": "assets/js/9.1c70efd1.js",
    "revision": "9e24f86910367144914ecbf04bea8d6b"
  },
  {
    "url": "assets/js/app.fda27f19.js",
    "revision": "bd02dcc571b74b1d4504b000707da00c"
  },
  {
    "url": "assets/js/vendors~flowchart.f5cdfab1.js",
    "revision": "4923f9fbdb349d5320106a0b0ab2a827"
  },
  {
    "url": "assets/js/vendors~notification.7414fc30.js",
    "revision": "4b2fa06e946087714f251475ce5cc89e"
  },
  {
    "url": "cache/CacheInterview.html",
    "revision": "b1fb4f40966d45b8e856a7b7bd83a977"
  },
  {
    "url": "cache/Caffeine.html",
    "revision": "6a86648ab3532f19ac65b5cd71726525"
  },
  {
    "url": "cache/Ehcache.html",
    "revision": "5bcfe0903bb44f890d10773118f1c8b6"
  },
  {
    "url": "cache/index.html",
    "revision": "abf306980979bdf84f31d62b1e966866"
  },
  {
    "url": "framework/index.html",
    "revision": "6a9289e0ca1630ed44b55e59f0b3839b"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "3a75cf7b65b8d8a64094ad471a817622"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "3b279f4328457c8384e7f64eec0923aa"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "5ef6909fbddf7a549e99845ef7acf235"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "5b1e03e60d575c756e9ffe7108dfc1a1"
  },
  {
    "url": "lib/index.html",
    "revision": "b480055e6a907a587307c87ee9099028"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "3b61cdc23e04a1525852cd957af11fb6"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "f288726458d00e8a313486a056332bc1"
  },
  {
    "url": "lib/javamail.html",
    "revision": "092df0d924d01b37fdbdfed7da7b05cf"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "c857a936e7937a0bbf4cfe7e39544dd8"
  },
  {
    "url": "lib/reflections.html",
    "revision": "cfb0db86680655a3966e7adcb3dea3fb"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "df0cdcf0f68a785b6fac50c208d77060"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "a1d3da75020d1c7e9807eb4f57f76aa6"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "44917f7adcb9e042a88d652042dc191e"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "bf07e209f39bdd1fdd1642609c922ce1"
  },
  {
    "url": "lib/template/index.html",
    "revision": "e9f7bbad7cd0a41613b9e0b769b1277a"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "1eca7fdc3f67bd36e78e85c5c3a6ea5f"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "be0b459562d344adaab87a5ef63445ec"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "2314ace8b2577a82699d932c3c1f04b2"
  },
  {
    "url": "lib/zxing.html",
    "revision": "438077138a19fb305d6f301b4f58bfa4"
  },
  {
    "url": "mq/activemq.html",
    "revision": "331f3024f8f63f89e3a24b203d25a15f"
  },
  {
    "url": "mq/index.html",
    "revision": "a089b0a51dfaeeee51ba421862272f6e"
  },
  {
    "url": "mq/kafka/index.html",
    "revision": "bc0002873a53ff69c8f9fe6c7d9dab2d"
  },
  {
    "url": "mq/kafka/kafka-advance.html",
    "revision": "6da69322bea5007d28e2641770573f05"
  },
  {
    "url": "mq/kafka/kafka-basic.html",
    "revision": "6f86ee56be6a216677b846c86bcdf71f"
  },
  {
    "url": "mq/kafka/kafka-ops.html",
    "revision": "ac6c487b220b5db5f2962b1405448b4a"
  },
  {
    "url": "mq/mq-interview.html",
    "revision": "e8127fceb5288e4ff0e5e2dce9dc7f30"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "88a90fd0649f7ebaf6075544bb8f63a2"
  },
  {
    "url": "search/elastic-beats-ops.html",
    "revision": "9d1b712524ff94d4ac09bc76222ba62f"
  },
  {
    "url": "search/elastic-beats.html",
    "revision": "5b8dfac4dd6230ae377fa7157368ab1b"
  },
  {
    "url": "search/elastic-kibana-ops.html",
    "revision": "c2a76e994ab5b80309be9c3e99b82a2a"
  },
  {
    "url": "search/elastic-kibana.html",
    "revision": "5b48f301d509b31ff4bc63eca342babb"
  },
  {
    "url": "search/elastic-logstash-ops.html",
    "revision": "18694336a3c7d85e64026d91ad39ed02"
  },
  {
    "url": "search/elastic-logstash.html",
    "revision": "6bf62ba0ceff29230034578ed7d761e8"
  },
  {
    "url": "search/elastic-quickstart.html",
    "revision": "90d63cc532bb480266345c88a03eacfc"
  },
  {
    "url": "search/elasticsearch/elasticsearch-ops.html",
    "revision": "1143fdcf52c204cb54ea36f3f625c1c9"
  },
  {
    "url": "search/elasticsearch/elasticsearch.html",
    "revision": "6cda21e5b6e346c9931b791a0426a117"
  },
  {
    "url": "search/elasticsearch/index.html",
    "revision": "f89ba860e42c5f14786bbd9221d986e1"
  },
  {
    "url": "search/index.html",
    "revision": "fe5e0010683313c350c06d45c6a76910"
  },
  {
    "url": "security/index.html",
    "revision": "bb2a7a1bec17856f589d711db2c4c677"
  },
  {
    "url": "security/shiro.html",
    "revision": "4db8a161d7f2813097492be61beae5ed"
  },
  {
    "url": "security/spring-security.html",
    "revision": "4c3885dcf31a5c1acbb2badb1d12c57b"
  },
  {
    "url": "server/index.html",
    "revision": "982b02f9958f278923daafac5d7ba0bc"
  },
  {
    "url": "server/jetty.html",
    "revision": "1cea458778b5d5541fae78b6063d414c"
  },
  {
    "url": "server/tomcat.html",
    "revision": "75739302e00927e0ac73dc33b0c538da"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "0a2a345a6b1a66aed18ea47b2b68b2ba"
  },
  {
    "url": "soa/index.html",
    "revision": "8bef0d1913039ed41f36dfe001ffdaa3"
  },
  {
    "url": "soa/zookeeper/index.html",
    "revision": "b23898e4925a97de783a39ad027b1d41"
  },
  {
    "url": "soa/zookeeper/zookeeper-ops.html",
    "revision": "02d4282f536ee4dcc4bc8f31164f9aa1"
  },
  {
    "url": "soa/zookeeper/zookeeper.html",
    "revision": "65ed129e8592a919d7b78b756b404b68"
  },
  {
    "url": "storage/index.html",
    "revision": "575feb177a312cd38eb07873d6b47e81"
  },
  {
    "url": "storage/shardingsphere.html",
    "revision": "39bb87f320497a3d463656864b826c2d"
  },
  {
    "url": "test/index.html",
    "revision": "70c632f6b00fb578bf239d98a8ce7cbd"
  },
  {
    "url": "test/jmeter.html",
    "revision": "838df1876b6230fba66f9c3e501943d7"
  },
  {
    "url": "test/jmh.html",
    "revision": "9d8a0d32e2628abc76637c0d6025e5b6"
  },
  {
    "url": "test/junit.html",
    "revision": "657e81a29fa69b33cf769d93d6678ae5"
  },
  {
    "url": "test/mockito.html",
    "revision": "249ee33c7bf761f2f3414385285334f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
