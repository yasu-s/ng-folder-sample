# NgSample

あとで整理

* core.moduleは基本的にapp.moduleにimport。
* 機能関連もフラットにフォルダ配置。各フォルダに機能モジュールを配置する。
* sharedモジュールは機能モジュールにImportして使用する。
* 機能モジュール間のImportは基本的に不可。
* 基本的にimport指定は`@プロジェクト名/モジュールパス`で指定する。同一ディレクトリのファイルについては相対パスにする。
* index.ts（バレル）を各フォルダに用意する。他フォルダからはindex.ts経由で各ファイルにアクセスする。
* index.tsでexportするファイルは直下のファイルのみにする。
* Componentなどはバレルでまとめて配列化しておく。

* componentsはPresentational Componentを配置する。（基本的には@Input, @Outputのみでデータやりとり。Injectなし）
* pagesは Container Components として扱う。

* `yarn lint:fix` で `Prettier` を起動。（VSCodeでTSLint使用時はファイル保存時に自動適用）

## 必須拡張機能

* [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
