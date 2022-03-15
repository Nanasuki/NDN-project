<div align="center">
  <h1>基于Quasar的Eletron应用程序</h1>
  author：wzoe
  NDN项目展示界面
  利用前端技术构建页面，封装到electro（vue+nodejs+chromium）中成为应用程序
  <h2>Qt项目兼容性方案1</h2>
  直接把Qt利用Emscripten交叉编译成Qt-WebAssembly，考虑使用< iframe >组件将编译的Wasm直接嵌入到Electron中。
  耗时两天，失败原因为qmake编译缺乏头文件（怀疑为C++库连接问题）
  该方法还有另一个方案，不再使用交叉编译，直接下载5.14以上的Qt版本，在Qt-Creator中直接使用WebAssembly（耗时过长，暂不尝试）
  <h2>Qt项目兼容性方案2</h2>
  在Electron项目中使用原生node组件child_process，定位到编译好的Qt程序并运行。
  缺点，两个程序实际上还是分离的。
</div>
