<?php
/**
 * MingiDB
 * An extremely minimal implementation of some database functionality for educational purposes.
 * Mimics some commands used with MongoDB, but uses single json-files as collections.
 * Not to be used for anything else than eductation...!
 * 
 * Simply copy this file on your server running php. Send commands and data as get-parameters.
 * 
 * @author Jirka Dell'Oro-Friedl, HFU, 2022
 * @see www.github.com/JirkaDellOro/MingiDB
 * @license MIT License
 */
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: *');
  error_reporting(E_ERROR);
  
  $command = $_GET["command"];
  $collection = $_GET["collection"];
  $id = $_GET["id"];
  $data = json_decode($_GET["data"], true);

  $result = array();
  $result["status"] = "success";

  if (!$command)
    failure("no command specified. See MingiDB on Github!");

  if (!$collection && $command != "show")
    failure("no collection specified");

  $filename = $collection.".json";
  switch ($command) {
    case "create":
      create($filename);
      break;
    case "drop":
      drop($filename);
      break;
    case "show":
      show();
      break;
    case "insert": 
      insert($filename, $data);
      break;
    case "delete": 
      delete($filename, $id);
      break;
    case "find":
      find($filename, $id, $data);
      break;
    case "update":
      update($filename, $id, $data);
      break;
    default:
      failure("unknown command");
      break;
  }
  
  // return result
  print(json_encode($result));

  //------------------

  // return failure message and die
  function failure($_data) {
    global $result;
    $result["status"] = "failure";
    $result["data"] = $_data;
    print(json_encode($result));
    die;
  }


  // create a new collection
  function create($_filename) {
    if (file_exists($_filename))
      return failure("collection already exists");

    $file = fopen($_filename, "w+");
    if (!$file)
      return failure(error_get_last()["message"]);
    
    if (!fwrite($file, "{}")) 
      failure(error_get_last()["message"].":".error_get_last()["line"]);
  }


  // delete a collection
  function drop($_filename) {
    if (!unlink($_filename))
      failure(error_get_last()["message"]);
  }


  // show collections
  function show() {
    global $result;
    $data = array();
    $dir = scandir("./");
    foreach($dir as $value)
      if (substr($value, -5, 5) == ".json")
        array_push($data, substr($value, 0, -5));

    $result["data"] = $data;
  }


  // insert a document in the collection
  function insert($_filename, $_data) {
    if (!(is_array($_data) && array_diff_key($_data, array_keys(array_keys($_data)))))
      return failure("no valid data to insert"); 

    if (!file_exists($_filename))
      return failure("collection does not exist"); 

    $json = array();
    if (filesize($_filename) > 0) 
      $json = readCollection($_filename);

    $id = uniqid();
    $json[$id] = $_data;
    writeCollection($_filename, $json);

    global $result;
    $result["data"] = array("id" => $id);
  }


  // delete a document from a collection
  function delete($_filename, $_id) {
    $json = readCollection($_filename);
    if (!$json[$_id])
      return failure("id not found");   

    unset($json[$_id]);
    writeCollection($_filename, $json);
  }


  // delete a document from a collection
  function find($_filename, $_id, $_data) {
    $json = readCollection($_filename);

    global $result;      
    $found = array();
    
    if ($_id) {
      if (!$json[$_id])
        return failure("id not found");   
      
      $found[$_id] = $json[$_id];
      $result["data"] = $found;
      return $found;
    }
    
    foreach($json as $id => $document) {
      if (count(array_uintersect($document, $_data, "strcasecmp")) == count($_data))
        $found[$id] = $document;
    }
    $result["data"] = $found;
    return $found;
  }


  // change values of a document in the collection
  // id must be provided to identify the document to update
  function update($_filename, $_id, $_data) {
    if (!$_id)
      return failure("id required to update a document");
    
    $json = readCollection($_filename);
    $document = $json[$_id]; 
    if (!$document)
      return failure("id not found");   
    
    foreach($_data as $key=> $value)
      $document[$key] = $value;
      
    $json[$_id] = $document;
    writeCollection($_filename, $json);

    global $result;      
    $data = array();
    $data[$_id] = $document;
    $result["data"] = $data;
  }
  

  // read the complete collection from the file
  function readCollection($_filename) {
    if (!file_exists($_filename))
      return failure("collection does not exist"); 

    $file = fopen($_filename, "r+");
    if (!$file)
      return failure(error_get_last()["message"]);      

    $content = fread($file, filesize($_filename)); 
    if (!$content){
      failure(error_get_last()["message"]);
      fclose($file);
      return;
    }

    if ($content == "{}")
      return array();

    $json= json_decode($content, true) or array();
    if (!$json)
      failure(error_get_last()["message"]); 
    
    fclose($file);
    return $json;
  }
  // write the complete collection to the files
  function writeCollection($_filename, $_json) {
    $file = fopen($_filename, "w+");
    $content = json_encode($_json, JSON_PRETTY_PRINT);
    if ($content == "[]")
      $content = "{}";
    if (!fwrite($file, $content)) 
      failure(error_get_last()["message"].":".error_get_last()["line"]);

	  fclose($file);
    return true;
  }
?>