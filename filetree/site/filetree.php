<style>
li.red {
	color: red;
}
li.blue {
	color: blue;
}
</style>
<?php
$rootUrl = "../books";
if (isset($_REQUEST["rootUrl"]))
	$rootUrl = $_REQUEST["rootUrl"];

function read_dir_content($rootUrl, $base_dir, $parent_dir, $depth = 0){
    $str_result = "";
	
    $str_result .= "<ul>";
    if ($handle = opendir($parent_dir)) 
    {
        while (false !== ($file = readdir($handle)))
        {
            if(in_array($file, array('.', '..'))) continue;
            if( is_dir($parent_dir . "/" . $file) ){
            	$str_result .= "<li class=\"red\">{$file}</li>";
            	$str_result .= "<div class=\"blue\">" . read_dir_content($rootUrl, $base_dir, $parent_dir . "/" . $file, $depth++) . "</div>";
            } else {
            	$len = strlen($base_dir);
            	$rest_str = substr($parent_dir, $len);
            	$alink = "<a target = \"_blank\" href=" . $rootUrl  . $rest_str . "/" . rawurlencode($file) . ">" . $file . "</a>";
            	$str_result .= "<li class=\"blue\">{$alink}</li>";
            }
        }
        closedir($handle);
    }
    $str_result .= "</ul>";


    return $str_result;
}

	
$folderName = "/home/madhan123/www/books";
if (isset($_REQUEST["folderName"]))
	$folderName = $_REQUEST["folderName"];
	
$base_dir = $folderName;	
echo "<ul>".read_dir_content($rootUrl, $base_dir, $folderName)."</ul>";

?>