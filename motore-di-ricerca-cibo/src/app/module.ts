export interface Root {
    code: string
    product: Product
    status: number
    status_verbose: string
  }
  
  export interface Product {
    _id: string
    _keywords: string[]
    added_countries_tags: any[]
    allergens: string
    allergens_from_ingredients: string
    allergens_from_user: string
    allergens_hierarchy: any[]
    allergens_tags: any[]
    brands: string
    brands_tags: string[]
    categories: string
    categories_hierarchy: string[]
    categories_lc: string
    categories_old: string
    categories_properties: CategoriesProperties
    categories_properties_tags: string[]
    categories_tags: string[]
    checkers_tags: any[]
    cities_tags: string[]
    code: string
    codes_tags: string[]
    compared_to_category: string
    complete: number
    completeness: number
    correctors_tags: string[]
    countries: string
    countries_hierarchy: string[]
    countries_lc: string
    countries_tags: string[]
    created_t: number
    creator: string
    data_quality_bugs_tags: any[]
    data_quality_errors_tags: any[]
    data_quality_info_tags: string[]
    data_quality_tags: string[]
    data_quality_warnings_tags: string[]
    data_sources: string
    data_sources_tags: string[]
    ecoscore_data: EcoscoreData
    ecoscore_grade: string
    ecoscore_tags: string[]
    editors_tags: string[]
    emb_codes: string
    emb_codes_tags: string[]
    entry_dates_tags: string[]
    food_groups: string
    food_groups_tags: string[]
    id: string
    image_front_small_url: string
    image_front_thumb_url: string
    image_front_url: string
    image_nutrition_small_url: string
    image_nutrition_thumb_url: string
    image_nutrition_url: string
    image_small_url: string
    image_thumb_url: string
    image_url: string
    images: Images
    informers_tags: string[]
    interface_version_created: string
    interface_version_modified: string
    lang: string
    languages: Languages
    languages_codes: LanguagesCodes
    languages_hierarchy: string[]
    languages_tags: string[]
    last_edit_dates_tags: string[]
    last_editor: string
    last_image_dates_tags: string[]
    last_image_t: number
    last_modified_by: string
    last_modified_t: number
    lc: string
    main_countries_tags: any[]
    max_imgid: string
    misc_tags: string[]
    nova_group_debug: string
    nova_group_error: string
    nova_groups_tags: string[]
    nutrient_levels: NutrientLevels
    nutrient_levels_tags: string[]
    nutriments: Nutriments
    nutriscore_data: NutriscoreData
    nutriscore_grade: string
    nutriscore_score: number
    nutriscore_score_opposite: number
    nutrition_data: string
    nutrition_data_per: string
    nutrition_data_prepared_per: string
    nutrition_grade_fr: string
    nutrition_grades: string
    nutrition_grades_tags: string[]
    nutrition_score_beverage: number
    nutrition_score_debug: string
    nutrition_score_warning_no_fiber: number
    nutrition_score_warning_no_fruits_vegetables_nuts: number
    packagings: any[]
    photographers_tags: string[]
    pnns_groups_1: string
    pnns_groups_1_tags: string[]
    pnns_groups_2: string
    pnns_groups_2_tags: string[]
    popularity_key: number
    popularity_tags: string[]
    product_name: string
    product_name_fr: string
    removed_countries_tags: any[]
    rev: number
    scans_n: number
    selected_images: SelectedImages
    serving_quantity: string
    serving_size: string
    states: string
    states_hierarchy: string[]
    states_tags: string[]
    stores: string
    stores_tags: string[]
    teams: string
    teams_tags: string[]
    traces: string
    traces_from_ingredients: string
    traces_from_user: string
    traces_hierarchy: any[]
    traces_tags: any[]
    unique_scans_n: number
    unknown_nutrients_tags: any[]
    update_key: string
  }
  
  export interface CategoriesProperties {}
  
  export interface EcoscoreData {
    adjustments: Adjustments
    agribalyse: Agribalyse
    missing: Missing
    missing_agribalyse_match_warning: number
    missing_key_data: number
    previous_data: PreviousData
    scores: Scores
    status: string
  }
  
  export interface Adjustments {
    origins_of_ingredients: OriginsOfIngredients
    packaging: Packaging
    production_system: ProductionSystem
    threatened_species: ThreatenedSpecies
  }
  
  export interface OriginsOfIngredients {
    aggregated_origins: AggregatedOrigin[]
    epi_score: number
    epi_value: number
    origins_from_origins_field: string[]
    transportation_score: number
    transportation_scores: TransportationScores
    transportation_value: number
    transportation_values: TransportationValues
    value: number
    values: Values
    warning: string
  }
  
  export interface AggregatedOrigin {
    epi_score: number
    origin: string
    percent: number
    transportation_score: any
  }
  
  export interface TransportationScores {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface TransportationValues {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface Values {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface Packaging {
    non_recyclable_and_non_biodegradable_materials: number
    value: number
    warning: string
  }
  
  export interface ProductionSystem {
    labels: any[]
    value: number
    warning: string
  }
  
  export interface ThreatenedSpecies {
    warning: string
  }
  
  export interface Agribalyse {
    warning: string
  }
  
  export interface Missing {
    agb_category: number
    ingredients: number
    labels: number
    origins: number
    packagings: number
  }
  
  export interface PreviousData {
    agribalyse: Agribalyse2
    grade: string
    score: number
  }
  
  export interface Agribalyse2 {
    agribalyse_proxy_food_code: string
    co2_agriculture: number
    co2_consumption: number
    co2_distribution: number
    co2_packaging: number
    co2_processing: number
    co2_total: number
    co2_transportation: number
    code: string
    dqr: string
    ef_agriculture: number
    ef_consumption: number
    ef_distribution: number
    ef_packaging: number
    ef_processing: number
    ef_total: number
    ef_transportation: number
    is_beverage: number
    name_en: string
    name_fr: string
    score: number
  }
  
  export interface Scores {}
  
  export interface Images {
    "1": N1
    "2": N2
    "3": N3
    front_fr: FrontFr
    nutrition_fr: NutritionFr
  }
  
  export interface N1 {
    sizes: Sizes
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes {
    "100": N100
    "400": N400
    full: Full
  }
  
  export interface N100 {
    h: number
    w: number
  }
  
  export interface N400 {
    h: number
    w: number
  }
  
  export interface Full {
    h: number
    w: number
  }
  
  export interface N2 {
    sizes: Sizes2
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes2 {
    "100": N1002
    "400": N4002
    full: Full2
  }
  
  export interface N1002 {
    h: number
    w: number
  }
  
  export interface N4002 {
    h: number
    w: number
  }
  
  export interface Full2 {
    h: number
    w: number
  }
  
  export interface N3 {
    sizes: Sizes3
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes3 {
    "100": N1003
    "400": N4003
    full: Full3
  }
  
  export interface N1003 {
    h: number
    w: number
  }
  
  export interface N4003 {
    h: number
    w: number
  }
  
  export interface Full3 {
    h: number
    w: number
  }
  
  export interface FrontFr {
    angle: number
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes4
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes4 {
    "100": N1004
    "200": N200
    "400": N4004
    full: Full4
  }
  
  export interface N1004 {
    h: number
    w: number
  }
  
  export interface N200 {
    h: number
    w: number
  }
  
  export interface N4004 {
    h: number
    w: number
  }
  
  export interface Full4 {
    h: number
    w: number
  }
  
  export interface NutritionFr {
    angle: number
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes5
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes5 {
    "100": N1005
    "200": N2002
    "400": N4005
    full: Full5
  }
  
  export interface N1005 {
    h: number
    w: number
  }
  
  export interface N2002 {
    h: number
    w: number
  }
  
  export interface N4005 {
    h: number
    w: number
  }
  
  export interface Full5 {
    h: number
    w: number
  }
  
  export interface Languages {
    "en:french": number
  }
  
  export interface LanguagesCodes {
    fr: number
  }
  
  export interface NutrientLevels {
    fat: string
    salt: string
    "saturated-fat": string
    sugars: string
  }
  
  export interface Nutriments {
    carbohydrates: number
    carbohydrates_100g: number
    carbohydrates_serving: number
    carbohydrates_unit: string
    carbohydrates_value: number
    energy: number
    "energy-kcal": number
    "energy-kcal_100g": number
    "energy-kcal_serving": number
    "energy-kcal_unit": string
    "energy-kcal_value": number
    "energy-kcal_value_computed": number
    energy_100g: number
    energy_serving: number
    energy_unit: string
    energy_value: number
    fat: number
    fat_100g: number
    fat_serving: number
    fat_unit: string
    fat_value: number
    "nutrition-score-fr": number
    "nutrition-score-fr_100g": number
    proteins: number
    proteins_100g: number
    proteins_serving: number
    proteins_unit: string
    proteins_value: number
    salt: number
    salt_100g: number
    salt_serving: number
    salt_unit: string
    salt_value: number
    "saturated-fat": number
    "saturated-fat_100g": number
    "saturated-fat_serving": number
    "saturated-fat_unit": string
    "saturated-fat_value": number
    sodium: number
    sodium_100g: number
    sodium_serving: number
    sodium_unit: string
    sodium_value: number
    sugars: number
    sugars_100g: number
    sugars_serving: number
    sugars_unit: string
    sugars_value: number
  }
  
  export interface NutriscoreData {
    energy: number
    energy_points: number
    energy_value: number
    fiber: number
    fiber_points: number
    fiber_value: number
    fruits_vegetables_nuts_colza_walnut_olive_oils: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
    grade: string
    is_beverage: number
    is_cheese: number
    is_fat: number
    is_water: number
    negative_points: number
    positive_points: number
    proteins: number
    proteins_points: number
    proteins_value: number
    saturated_fat: number
    saturated_fat_points: number
    saturated_fat_ratio: number
    saturated_fat_ratio_points: number
    saturated_fat_ratio_value: number
    saturated_fat_value: number
    score: number
    sodium: number
    sodium_points: number
    sodium_value: number
    sugars: number
    sugars_points: number
    sugars_value: number
  }
  
  export interface SelectedImages {
    front: Front
    nutrition: Nutrition
  }
  
  export interface Front {
    display: Display
    small: Small
    thumb: Thumb
  }
  
  export interface Display {
    fr: string
  }
  
  export interface Small {
    fr: string
  }
  
  export interface Thumb {
    fr: string
  }
  
  export interface Nutrition {
    display: Display2
    small: Small2
    thumb: Thumb2
  }
  
  export interface Display2 {
    fr: string
  }
  
  export interface Small2 {
    fr: string
  }
  
  export interface Thumb2 {
    fr: string
  }
  