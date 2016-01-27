var json_str_arr = ['{ "alignment": null, "de": "I am sorry .", "en": "Das tut mir leid .", "graphs": [ { "currently_split": false, "edges": [ { "direction": "de", "from_id": [ 1 ], "to_id": [ 0 ] }, { "direction": "en", "from_id": [ 0 ], "to_id": [ 1 ] } ], "er": true, "external_reorder_by": "de", "id": 0, "initial_order": 0, "internal_reorder_by": "en", "is_separator": false, "nodes": [ { "de_id": 0, "en_id": 0, "er_lang": "en", "frequency": null, "graph": null, "id": 1, "ir": false, "lang": "en", "s": "I", "to_de": true, "to_en": false, "visible": false, "visible_order": null }, { "de_id": 0, "en_id": 0, "er_lang": "en", "frequency": 0.18874172185430463, "graph": null, "id": 0, "ir": false, "lang": "de", "s": "Das", "to_de": false, "to_en": true, "visible": true, "visible_order": 0 } ], "separator_positions": null, "separators": null, "split_interaction": null, "split_order_by_de": null, "split_order_by_en": null, "splits": false, "swap_toward_de": [], "swap_toward_en": [], "swaps": false }, { "currently_split": false, "edges": [ { "direction": "de", "from_id": [ 2 ], "to_id": [ 0 ] }, { "direction": "en", "from_id": [ 0 ], "to_id": [ 2 ] }, { "direction": "de", "from_id": [ 2 ], "to_id": [ 1 ] }, { "direction": "en", "from_id": [ 1 ], "to_id": [ 2 ] } ], "er": true, "external_reorder_by": "de", "id": 2, "initial_order": 1, "internal_reorder_by": "en", "is_separator": false, "nodes": [ { "de_id": 1, "en_id": 2, "er_lang": "en", "frequency": null, "graph": null, "id": 2, "ir": false, "lang": "en", "s": "sorry", "to_de": true, "to_en": false, "visible": false, "visible_order": null }, { "de_id": 1, "en_id": 2, "er_lang": "en", "frequency": 0.006622516556291391, "graph": null, "id": 0, "ir": false, "lang": "de", "s": "tut", "to_de": false, "to_en": true, "visible": true, "visible_order": 1 }, { "de_id": 2, "en_id": 2, "er_lang": "en", "frequency": 0.006622516556291391, "graph": null, "id": 1, "ir": false, "lang": "de", "s": "mir", "to_de": false, "to_en": true, "visible": true, "visible_order": 2 } ], "separator_positions": null, "separators": null, "split_interaction": null, "split_order_by_de": null, "split_order_by_en": null, "splits": false, "swap_toward_de": [], "swap_toward_en": [ { "graphs": [ 2 ], "head": 1, "other_graphs": [ 1 ] } ], "swaps": true }, { "currently_split": false, "edges": [ { "direction": "de", "from_id": [ 1 ], "to_id": [ 0 ] }, { "direction": "en", "from_id": [ 0 ], "to_id": [ 1 ] } ], "er": true, "external_reorder_by": "de", "id": 1, "initial_order": 2, "internal_reorder_by": "en", "is_separator": false, "nodes": [ { "de_id": 3, "en_id": 1, "er_lang": "en", "frequency": null, "graph": null, "id": 1, "ir": false, "lang": "en", "s": "am", "to_de": true, "to_en": false, "visible": false, "visible_order": null }, { "de_id": 3, "en_id": 1, "er_lang": "en", "frequency": 0.006622516556291391, "graph": null, "id": 0, "ir": false, "lang": "de", "s": "leid", "to_de": false, "to_en": true, "visible": true, "visible_order": 3 } ], "separator_positions": null, "separators": null, "split_interaction": null, "split_order_by_de": null, "split_order_by_en": null, "splits": false, "swap_toward_de": [], "swap_toward_en": [ { "graphs": [ 2 ], "head": 1, "other_graphs": [ 1 ] } ], "swaps": true }, { "currently_split": false, "edges": [ { "direction": "de", "from_id": [ 1 ], "to_id": [ 0 ] }, { "direction": "en", "from_id": [ 0 ], "to_id": [ 1 ] } ], "er": true, "external_reorder_by": "de", "id": 3, "initial_order": 3, "internal_reorder_by": "en", "is_separator": false, "nodes": [ { "de_id": 4, "en_id": 3, "er_lang": "en", "frequency": null, "graph": null, "id": 1, "ir": false, "lang": "en", "s": ".", "to_de": true, "to_en": false, "visible": false, "visible_order": null }, { "de_id": 4, "en_id": 3, "er_lang": "en", "frequency": 1.0, "graph": null, "id": 0, "ir": false, "lang": "de", "s": ".", "to_de": false, "to_en": true, "visible": true, "visible_order": 4 } ], "separator_positions": null, "separators": null, "split_interaction": null, "split_order_by_de": null, "split_order_by_en": null, "splits": false, "swap_toward_de": [], "swap_toward_en": [], "swaps": false } ], "id": 200, "initial_order_by": "de" }']
module.exports.Preview = json_str_arr