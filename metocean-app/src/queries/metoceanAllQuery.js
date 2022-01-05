const metoceanAllQuery = `
  query Query {
    metoceanAll {
      time
      lev
      hs
      hx
      tp
      tm01
      tm02
      dp
      dpm
      hs_sw1
      hs_sw8
      tp_sw1
      tp_sw8
      dpm_sw8
      dpm_sw1
      hs_sea8
      hs_sea
      tp_sea8
      tp_sea
      tm_sea
      dpm_sea8
      dpm_sea
      hs_ig
      hs_fig
      wsp
      gst
      wd
      wsp100
      wsp50
      wsp80
      precip
      tmp
      rh
      vis
      cld
      cb
      csp0
      cd0
      ss
      sst
    }
  }
`;

export default metoceanAllQuery;
