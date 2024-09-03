// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {
    //regions_unexplored
    allthemods.add('regions_unexplored:magnolia_logs', [
        'regions_unexplored:magnolia_log',
        'regions_unexplored:stripped_magnolia_log',
        'regions_unexplored:magnolia_wood',
        'regions_unexplored:stripped_magnolia_wood',
    ])

    //allthemodium
    allthemods.add('allthemodium:ancient_logs', [
        'allthemodium:ancient_log_0',
        'allthemodium:ancient_log_1',
        'allthemodium:ancient_log_2',
        'allthemodium:stripped_ancient_log'
    ])
    allthemods.add('allthemodium:soul_logs', [
        'allthemodium:soul_log',
        'allthemodium:soul_log_0',
        'allthemodium:soul_log_1',
        'allthemodium:soul_log_2',
        'allthemodium:stripped_soul_log'
    ])
    allthemods.add('allthemodium:demonic_logs', [
        'allthemodium:demonic_log',
        'allthemodium:stripped_demonic_log',
    ])
})

ServerEvents.recipes(allthemods => {
    function mekSawing(output, input, extraOutput, id) {
        let inputObject = {
            "count": input.count || 1
        };

        if (input.item) {
            inputObject["item"] = input.item;
        } else if (input.tag) {
            inputObject["tag"] = input.tag;
        }

        let recipe = {
            "type": "mekanism:sawing",
            "input": inputObject,
            "main_output": {
                "count": output.count || 1,
                "id": output.item
            },
            "secondary_chance": extraOutput.chance,
            "secondary_output": {
                "count": extraOutput.count,
                "id": extraOutput.item
            }
        };

        allthemods.custom(recipe).id(`allthemods:mekanism/sawing/${id}`);
    }

    function prodSawing(log, planks, secondary, id) {
        allthemods.custom({
            "type": "productivetrees:sawmill",
            "log": {
                "tag": log.tag
            },
            "planks": {
                "count": planks.count || 6,
                "id": planks.item
            },
            "secondary": {
                "count": secondary.count || 2,
                "id": secondary.item
            }
        }).id(`allthemods:productivetrees/sawing/${id}`);
    }

    let logs  = Ingredient.of('#minecraft:logs').stacks.toArray().map(item => String(item.getId().split(' ').pop()));
    const logTypes = ['log.*', 'stem.*'];
    const logReg = new RegExp(`(_(?:${logTypes.join('|')})(?!.*_(?:${logTypes.join('|')})).*?)$`);

    logs.forEach(log => {
        mekSawing(
            {item: log.replace(logReg, '_planks'), count: 6},
            {tag: log.replace(logReg, '_logs'), count: 1},
            {chance: 0.25, item: 'mekanism:sawdust', count: 1},
            log.split(':')[0] + '/' + log.split(':')[1] + '_to_planks'
        );
    });

    //ars wants to be special
    mekSawing(
        {item: 'ars_nouveau:archwood_planks', count: 6},
        {tag: 'c:logs/archwood', count: 1},
        {chance: 0.25, item: 'mekanism:sawdust', count: 1},
        'ars_nouveau/archwood_log_to_planks'
    );

    logs.forEach(log => {
        prodSawing(
            {tag: log.replace(logReg, '_logs')},
            {item: log.replace(logReg, '_planks'), count: 6},
            {item: 'productivetrees:sawdust', count: 2},
            log.split(':')[0] + '/' + log.split(':')[1] + '_to_planks'
        )
    })

    //ars yet again
    prodSawing(
        {tag: 'ars_nouveau:archwood_planks'},
        {item: 'c:logs/archwood', count: 6},
        {item: 'productivetrees:sawdust', count: 2},
        'ars_nouveau/archwood_log_to_planks'
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.