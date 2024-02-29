function beforeSendData(customFields,customFacts){
    customFields[0] = hAPI.getCardValue('txt_objetoContratacao');
    customFields[0] = hAPI.getCardValue('txt_DataSolicita');
}
