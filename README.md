# NgSample

あとで整理

* core.moduleは基本的にapp.moduleにimport。
* 機能関連もフラットにフォルダ配置。各フォルダに機能モジュールを配置する。
* sharedモジュールは機能モジュールにImportして使用する。
* 機能モジュール間のImportは基本的に不可。
* 基本的にimport指定は`@プロジェクト名/モジュールパス`で指定する。

* componentsはPresentational Componentを配置する。（基本的には@Input, @Outputのみでデータやりとり。Injectなし）
* pagesは Container Components として扱う。
