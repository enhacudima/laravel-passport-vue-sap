<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProvinceStates extends Model
{
    protected $table = 'uvw_country_states';

    protected $guarded =array();

    public $primaryKey = 'id';

    public $timestamps=false;
}
