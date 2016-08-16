<?php
$apiKey = 'fdtwetDCGHS536SHnIgst47huns0bfi';
$url = 'https://apidev.contactspace.com/';
require 'connect.php';
$socket = new dbConnect;
$sql = "SELECT id, call_id FROM call_recordings WHERE file_link = '' LIMIT 1";
$infoArray = $socket->fetch_result($sql, true);
if  ($infoArray === NULL){
  exit('no more records');
};
$callId = $infoArray['call_id'];
$result = file_get_contents($url.'?apikey='.$apiKey.'&function=GetRecording&callid='.$callId);
$xml = simplexml_load_string($result);
$xml = (array)$xml;
if (!isset($xml['url'])){
  $xml['url'] = 'NA';
}
if (is_array($xml['url'])){
  $newXmlUrl = implode(', ', $xml['url']);
  $xml['url'] = $newXmlUrl;
}
$sql = "UPDATE call_recordings SET file_link = '{$xml['url']}' WHERE id = {$infoArray['id']}";
$socket->execute($sql);
echo ($xml['url']);
