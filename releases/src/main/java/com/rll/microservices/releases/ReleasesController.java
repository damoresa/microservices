package com.rll.microservices.releases;

import com.rll.microservices.common.model.releases.GetReleasesResponse;
import com.rll.microservices.common.model.releases.ReleaseDTO;
import com.rll.microservices.common.utils.CommonUtils;
import com.rll.microservices.releases.dao.ReleaseDAO;
import com.rll.microservices.releases.model.Release;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RefreshScope
@RestController
public class ReleasesController {
    
    @Autowired
    private ReleaseDAO releaseDAO;

    private ReleaseDTO modelToDTO(Release release) {
        ReleaseDTO releaseDTO = new ReleaseDTO();
        releaseDTO.setRelease_id(release.id);
        releaseDTO.setRelease_title(release.title);
        releaseDTO.setRelease_date(release.date);

        return releaseDTO;
    }

    private Release DTOToModel(ReleaseDTO releaseDTO) {
        Release release = new Release();
        release.id = releaseDTO.getRelease_id();
        release.title = releaseDTO.getRelease_title();
        release.date = releaseDTO.getRelease_date();

        return release;
    }

    @RequestMapping(path = "/releases/init", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    void initBooks() {

        Release release1 = new Release("Upcoming great release", "19/04/2017");
        Release release2 = new Release("Another upcoming great release", "20/04/2017");

        releaseDAO.save(Arrays.asList(release1, release2));
    }

    @RequestMapping(value = "/releases", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    GetReleasesResponse getReleases() {

        GetReleasesResponse response = new GetReleasesResponse();
        List<ReleaseDTO> releaseDTOs = new ArrayList<ReleaseDTO>();

        List<Release> releases = releaseDAO.findAll();

        for (Release release : releases)
        {
            releaseDTOs.add(this.modelToDTO(release));
        }

        if (!releaseDTOs.isEmpty())
        {
            response.setResult(releaseDTOs);
        }
        else
        {
            CommonUtils.generateError(response, "RELEASES_GETLIST_001", "Unable to retrieve releases");
        }

        return response;
    }
}
