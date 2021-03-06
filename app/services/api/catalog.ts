/// <reference path='../../../typings/all.d.ts' />
import angular = require('angular');

import iapi = require('api.i');

export class API_Catalog implements iapi.IAPI {

    public apiURL;
    public items;
    public malls;
    public userToken;

    constructor ($resource) {

        var apiURL = this.apiURL,
            catalog = this;

        this.items = $resource(apiURL + '/items', {token: ()=>{
                return catalog.userToken}},
            {
                getItems: {
                    method: 'GET',
                    isArray: true,
                    cache: true
                },

                saveItems: {
                    method: 'POST'
                }
            });

        this.malls = $resource(apiURL + '/malls', {token: ()=>{return catalog.userToken}},
            {
                getMalls: {
                    method: 'GET',
                    isArray: true,
                    cache: true
                }
            });
    }

}