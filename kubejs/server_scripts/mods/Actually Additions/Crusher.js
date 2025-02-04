// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    function addAACrusher(input, output) {
        allthemods.custom(
            {
                type: 'actuallyadditions:crushing',
                ingredient: Ingredient.of(input).toJson(),
                result: [
                    {
                        result: {
                            count: 1,
                            id: output
                        }
                    },
                    {
                        chance: 0.5,
                        result: {
                            count: 1,
                            id: output
                        }
                    }
                ]
            }
        )
    }

    //Minecraft
        addAACrusher('minecraft:raw_iron', 'alltheores:iron_dust')
        addAACrusher('minecraft:raw_copper', 'alltheores:copper_dust')
        addAACrusher('minecraft:raw_gold', 'alltheores:gold_dust')

    //ATO

        let ATO = [
            'aluminum',
            'lead',
            'nickel',
            'osmium',
            'platinum',
            'silver',
            'tin',
            'uranium',
            'zinc',
            'iridium'
        ]

        for (let ore of ATO) {
            addAACrusher(`#c:raw_materials/${ore}`, `alltheores:${ore}_dust`)
        }

    //Silent Gear
        addAACrusher('silentgear:raw_crimson_iron', 'silentgear:crimson_iron_dust')
        addAACrusher('silentgear:raw_azure_silver', 'silentgear:azure_silver_dust')

    //Occultism
        addAACrusher('occultism:raw_iesnium', 'occultism:iesnium_dust')

    //Modern Industrialisation
        addAACrusher('modern_industrialization:raw_antimony', 'modern_industrialization:antimony_dust')
        addAACrusher('modern_industrialization:raw_tungsten', 'modern_industrialization:tungsten_dust')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.